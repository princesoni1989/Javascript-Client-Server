import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {render} from 'react-dom'
import reducers from './reducers'

import App from './components/App'

const store = createStore(reducers, applyMiddleware(thunk))
const apps = document.getElementById("app")
render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , apps
)