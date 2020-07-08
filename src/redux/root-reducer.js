import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import collectionReducer from './collections/collections.reducer'

const rootPersistConfig={
    key:'root',
    storage:storage,
    whiteList:['cart']

}

const rootReducer=combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    collection:collectionReducer

})

export default persistReducer(rootPersistConfig,rootReducer);