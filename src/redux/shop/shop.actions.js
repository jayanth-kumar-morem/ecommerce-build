import { firestore , convertCollectionToMap } from "../../firebase/firebase.utils";
import shopActionTypes from "./shop.types";
export const fetchCollectionsStart = () => ({
    type : shopActionTypes.FETCH_COLLECTION_START,
    payload : null,
})
export const fetchCollectionsSuccess = collectionsMap => ({
    type: shopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload : collectionsMap,
})
export const fetchCollectionsFailure = error => ({
    type : shopActionTypes.FETCH_COLLECTION_FAILURE,
    payload : error,
})
export const fetchCollectionsStartAsync =() =>{
    return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());
    collectionRef.get().then(snapshot => 
    {
      const mappedCollection = convertCollectionToMap(snapshot);
      dispatch(fetchCollectionsSuccess(mappedCollection));
    }).catch(error => dispatch(fetchCollectionsFailure(error)));
    }
}