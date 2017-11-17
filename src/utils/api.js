import _ from 'lodash';
import { AsyncStorage, Alert } from 'react-native';
import { Permissions, Notifications } from 'expo';

const FLASHCARD_KEY = 'FLASHCARD_KEY:newTest';
const NOTIFICTION_KEY = 'FLASHCARD_KEY:notifications';

export function apiGetDecks() {
  return AsyncStorage.getItem(FLASHCARD_KEY).catch((e) => console.log(e));
}

export function apiSaveTitle(deckName) {
  const obj = JSON.stringify(deckName);
  return AsyncStorage.mergeItem(FLASHCARD_KEY, obj);
}

export function apiAddCard({ card, deckName }) {
  return AsyncStorage.getItem(FLASHCARD_KEY, (e, result) => {
    let decks = JSON.parse(result);
    let newCard = decks[deckName].questions;
    newCard[newCard.length] = card;
    const value = JSON.stringify({
      [deckName]: { title: deckName, questions: newCard }
    });

    AsyncStorage.mergeItem(FLASHCARD_KEY, value);
  })
}

export function clearLocalNotifications() {
  return AsyncStorage.removeItem(NOTIFICTION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function createNotification() {
  return {
    title: 'Study your flashcards today!',
    body: "Don't forget to study your flashcards today.",
    andriod: {
      sounds: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  };
}

export function setLocalNotifications() {
  AsyncStorage.getItem(NOTIFICTION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({status}) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();
  
              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate + 1);
              tomorrow.setHours(20, 0);
  
              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )
  
              AsyncStorage.setItem(NOTIFICTION_KEY, JSON.stringify(true));
            }
          })
      }
    })
}