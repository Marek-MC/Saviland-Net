import '../styles/globals.css'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'


import rootReducer from '../redux/reducers/_root.reducer'
import rootSaga from '../redux/sagas/_root.saga'


// A bunch of Redux stuff

const sagaMiddleware = createSagaMiddleware()
const middlewareList = process.env.NODE_ENV === 'development' ? [sagaMiddleware, logger] : [sagaMiddleware]

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewareList
})

sagaMiddleware.run(rootSaga)

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
