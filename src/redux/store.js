import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootSaga from './root-saga'
import rootReducer from './root-reducer'
import {persistStore} from 'redux-persist'
import createSagaMiddleWare from 'redux-saga'

const sagaMiddleWare=createSagaMiddleWare();
const middleWare=[sagaMiddleWare];


if(process.env.NODE_ENV==='development'){
    middleWare.push(logger);
}
export const store=createStore(rootReducer,applyMiddleware(...middleWare))
sagaMiddleWare.run(rootSaga)
export const persistor=persistStore(store)
