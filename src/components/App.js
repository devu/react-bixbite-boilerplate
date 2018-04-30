import React from "react"
import ReactDOM from "react-dom"
import { spawnCore, registerReducers, registerServices } from '../react-bixbite'

import Root from './Root'

import AppReducer from '../reducers/AppReducer'
import AppService from '../services/AppService'

const core = spawnCore('MAIN')
registerReducers([AppReducer], core.id)
registerServices([AppService], core.id)

const ROOT_NODE = document.getElementById("app")

const App = () => {
  return (
    <Root coreId={core.id}/>
  )
}
export default App

ReactDOM.render(<App />, ROOT_NODE)