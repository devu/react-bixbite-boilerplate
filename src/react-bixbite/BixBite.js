/* eslint no-console: 0 */
import Core from './Core'

class BxBite {
  constructor() {
    this.defaultCore = 'MAIN'
    this.cores = {}
  }

  spawnCore = id => {
    return (this.cores[id] = new Core(id))
  }

  destroyCore = id => {
    if (this.getCore(id)) {
      this.cores[id].destroy()
      this.cores[id] = null
      delete this.cores[id]
    }
  }

  registerReducer = (reducer, id) => this.getCore(id).registerReducer(reducer)

  registerReducers = (reducers, id) => {
    reducers.forEach(reducer => this.registerReducer(reducer, id))
  }

  registerService = (service, id) => {
    this.getCore(id).registerService(service)
  }

  registerServices = (services, id) => {
    services.forEach(service => this.registerService(service, id))
  }

  connect = (component, id) => {
    this.getCore(id).registerComponent(component)
  }

  send = (type, id) => {
    this.getCore(id).emit(type)
  }

  getCore = id => {
    const sid = id || this.defaultCore
    if (!this.cores[sid]) {
      throw new Error(`There is no core with id ${sid}`)
    }
    return this.cores[sid]
  }
}

export default new BxBite()
