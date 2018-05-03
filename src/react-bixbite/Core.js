import Emitter from './Emitter'

class Core extends Emitter {
  registerReducers = reducers => {
    reducers.forEach(reducer => this.registerReducer(reducer))
  }

  registerServices = services => {
    services.forEach(service => this.registerService(service))
  }
}

export default Core
