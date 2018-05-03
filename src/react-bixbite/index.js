/* eslint no-console: 0 */

import BixBite from './BixBite'

BixBite.spawnCore('MAIN')

const spawnCore = id => {
  return BixBite.spawnCore(id)
}

const getCore = id => {
  return BixBite.getCore(id)
}

const registerReducers = reducers => {
  BixBite.registerReducers(reducers)
}

const registerServices = services => {
  BixBite.registerServices(services)
}

const connect = (component, id) => {
  BixBite.connect(component, id)
}

export { spawnCore, getCore, registerReducers, registerServices, connect }
