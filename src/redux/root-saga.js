import {all,call} from 'redux-saga/effects'
import {fetchCollectionsStart} from './collections/collections.sagas'
import {userSagas} from './user/user.sagas'
import {cartSagas} from './cart/cart.sagas'
export default function* rootSaga(){
    yield all([call(fetchCollectionsStart),call(userSagas),call(cartSagas)])
}