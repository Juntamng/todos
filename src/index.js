import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers'

function logger({ getState }) {
    return next => action => {
      console.log('will dispatch', action)
  
      // Call the next dispatch method in the middleware chain.
      const returnValue = next(action)
  
      console.log('state after dispatch', getState())
  
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return returnValue
    }
  }

const storeLocal = (store) => (next) => (action) => {
  next(action)
  //localStorage.setItem('data', JSON.stringify(store.getState()) )
}

const initObj = (localStorage.getItem('data') === null) ? 
  {} : 
  JSON.parse(localStorage.getItem('data'))

const store = createStore(rootReducer, {}, applyMiddleware(storeLocal) )

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)