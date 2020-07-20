import {all, call,takeLatest,put} from 'redux-saga/effects'
import {userActionTypes} from '../user/user.action_types'
import {clearAllItemsFromCart} from './cart.actions'

export function* clearAllItemsFromCartStart(){
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS,onClearAllItemsFromCart)
}
export function* onClearAllItemsFromCart(){
    yield put(clearAllItemsFromCart())
}

export function* cartSagas(){
    yield all([call(clearAllItemsFromCartStart)])
}