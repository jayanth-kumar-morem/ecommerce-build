import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDLBPMdSn6zDEY1Gv8qwgkiGTJf8HBiQEA",
  authDomain: "ecommerce-ab1e0.firebaseapp.com",
  databaseURL: "https://ecommerce-ab1e0.firebaseio.com",
  projectId: "ecommerce-ab1e0",
  storageBucket: "ecommerce-ab1e0.appspot.com",
  messagingSenderId: "109761895550",
  appId: "1:109761895550:web:452f8bc03fdc18359d0c2f",
  measurementId: "G-6MNZ2CXS0C"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
export const addCollectionsAndItems = async ( collectionKey , itemsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  itemsToAdd.forEach(item => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef , item);
  });
  return await batch.commit();
}
export const convertCollectionToMap = (collection) =>{
  const transformedCollection = collection.docs.map(doc => {
    const {title, items} = doc.data();
    return {
      routeName : encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  })
  return transformedCollection.reduce(((accumulator, collection)=>{
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }),{})
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
