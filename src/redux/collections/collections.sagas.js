import {takeLatest,call,put} from 'redux-saga/effects'
import CollectionActionTypes from './collections.action_types'
import {fetchCollectionSuccess,fetchCollectionFailure} from './collections.actions'
import {firestore,convertCollectionObjectToArray} from '../../firebase/firebase.utils'
export function* fetchCollectionsStart(){
    yield takeLatest(CollectionActionTypes.FETCH_COLLECTIONS_START,fetchCollectionAsync)
}
export function* fetchCollectionAsync(){
   // yield console.log("Iam fired");

    try{
        const collectionRef=firestore.collection('collections');

        const snapshot= yield collectionRef.get();
        yield console.log(snapshot);
        const collectionsMap=yield call (convertCollectionObjectToArray,snapshot);
        yield put(fetchCollectionSuccess(collectionsMap));

    }
    catch(error){
        yield put(fetchCollectionFailure(error))
    }
    // const collectionRef=firestore.collection('collections');
    // dispatch(fetchCollectionStart());
    // collectionRef.onSnapshot(snapshot=>{
    //     const collectionsMap=convertCollectionObjectToArray(snapshot)
    //     dispatch(fetchCollectionSuccess(collectionsMap))

    // },error=>dispatch(fetchCollectionFailure(error)))
}

