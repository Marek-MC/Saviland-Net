import '../styles/globals.css'

import { applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootReducer from '../redux/reducers/_root.reducer'
import rootSaga from '../redux/sagas/_root.saga'


// A bunch of Redux stuff

const sagaMiddleware = createSagaMiddleware();

// this line creates an array of all of redux middleware you want to use
// we don't want a whole ton of console logs in our production code
// logger will only be added to your project if your in development mode
const middlewareList = process.env.NODE_ENV === 'development' ? [sagaMiddleware, logger] : [sagaMiddleware]

// const store = createStore(
//   // tells the saga middleware to use the rootReducer
//   // rootSaga contains all of our other reducers
//   rootReducer,
//   // adds all middleware to our project including saga and logger
//   applyMiddleware(...middlewareList),
// )

export const store = configureStore({reducer: {rootReducer}})









function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />

}

export default MyApp
