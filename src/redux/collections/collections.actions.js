import ShopActionTypes from './collections.action_types'
import {firestore,convertCollectionObjectToArray} from '../../firebase/firebase.utils'

export const fetchCollectionStart=()=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_START
})
export const fetchCollectionSuccess=(collectionsMap)=>({
    type:ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload:collectionsMap
})
export const fetchCollectionAsync=()=>{
    return dispatch=>{
        const collectionRef=firestore.collection('collections');
        dispatch(fetchCollectionStart());
        collectionRef.onSnapshot(snapshot=>{
            const collectionsMap=convertCollectionObjectToArray(snapshot)
            dispatch(fetchCollectionSuccess(collectionsMap))

        },error=>dispatch(fetchCollectionFailure(error)))
    }
}

export const fetchCollectionFailure=(errorMessage)=>({
    type:ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload:errorMessage
})