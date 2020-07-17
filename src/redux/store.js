import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import rootReducer from './root-reducer'
import {persistStore} from 'redux-persist'
import createSagaMiddleWare from 'redux-saga'

const middleWare=[thunk];
if(process.env.NODE_ENV==='development'){
    middleWare.push(logger);
}
export const store=createStore(rootReducer,applyMiddleware(...middleWare))
export const persistor=persistStore(store)
