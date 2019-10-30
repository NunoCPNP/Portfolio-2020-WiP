import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE.APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE.AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE.DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE.PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE.STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE.MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE.APPID,
  measurementId: process.env.REACT_APP_FIREBASE.MEASUREMENTID
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const analytics = firebase.analytics()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
