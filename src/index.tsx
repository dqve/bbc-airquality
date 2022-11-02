//Poly-fills
import 'core-js/features/array/flat-map'
import 'core-js/features/map'
import 'core-js/features/promise'
import 'core-js/features/set'
import 'raf/polyfill'
import 'whatwg-fetch'

//Module imports
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'

//React renderer
ReactDOM.render(
    <App />,
    document.getElementById('app-root'),
)