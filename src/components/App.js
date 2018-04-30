import React from "react"
import ReactDOM from "react-dom"
import { getCore, registerReducers, registerServices } from '../react-bixbite'

import Root from './Root'

import AppReducer from '../reducers/AppReducer'
import AppService from '../services/AppService'

const core = getCore('MAIN')
registerReducers([AppReducer], core.id)
registerServices([AppService], core.id)

const ROOT_NODE = document.getElementById("app")

const App = () => {
  return (
    <Root/>
  )
}
export default App

ReactDOM.render(<App />, ROOT_NODE)