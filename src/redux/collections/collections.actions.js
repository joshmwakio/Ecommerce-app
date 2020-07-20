import ShopActionTypes from './collections.action_types'
import {firestore,convertCollectionObjectToArray} from '../../firebase/firebase.utils'

export const fetchCollectionStart=()=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_START
})
export const fetchCollectionSuccess=(collectionsMap)=>({
    type:ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload:collectionsMap
})

export const fetchCollectionFailure=(errorMessage)=>({
    type:ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload:errorMessage
})