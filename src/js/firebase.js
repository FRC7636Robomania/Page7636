import firebase from 'firebase/compat/app'
import { getFirestore, collection, doc } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyD9w9x78y3mSW2CFQzlnYUzuuRZrz4rcy8',
  authDomain: 'frc7636.firebaseapp.com',
  projectId: 'frc7636',
  storageBucket: 'frc7636.appspot.com',
  messagingSenderId: '547352142617',
  appId: '1:547352142617:web:c546c31414c1c0f3fa9b88',
  measurementId: 'G-ZS6FNECGK1',
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)
const storage = getStorage(app)

// fetch Documents from Firebase
export const documents = {
  homeDoc: doc(collection(db, 'views'), 'homePage'),
  membersDoc: doc(collection(db, 'views'), 'membersPage'),
  newsDoc: doc(collection(db, 'views'), 'newsPage'),
  outreachDoc: doc(collection(db, 'views'), 'outreachPage'),
  resourcesDoc: doc(collection(db, 'views'), 'resourcesPage'),
  sponsorsDoc: doc(collection(db, 'views'), 'sponsorsPage'),

  headerDoc: doc(collection(db, 'components'), 'header'),
  footerDoc: doc(collection(db, 'components'), 'footer'),
}

export { analytics, db, storage }
