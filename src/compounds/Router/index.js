/* eslint no-console: 0 */
import { spawnCore } from '../../react-bixbite'
import RouterReducer from './reducers/RouterReducer'
import Route from './components/Route'
export { Route }

const core = spawnCore('ROUTER')
core.registerReducers([RouterReducer])

export { default } from './components/Router'
