/* eslint no-console: 0 */

import BixBite from './BixBite'

const spawnCore = (id) => {
  return BixBite.spawnCore(id)
}

const registerReducers = (reducers) => {
  BixBite.registerControlers(reducers)
}

const registerServices = (services) => {
  BixBite.registerServices(services)
}

export { spawnCore, registerReducers, registerServices }
export { default } from './Container'