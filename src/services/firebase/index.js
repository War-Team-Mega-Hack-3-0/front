import firebase from 'firebase'

import credentials from './credentials_firebase.json'

export const initializeFirebase = () =>
  firebase.initializeApp(credentials)

export const askForPermissionToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging()

    await messaging.requestPermission()
    const token = await messaging.getToken()
    console.log('user token: ', token)

    return token
  } catch (error) {
    console.error(error)
  }
}
