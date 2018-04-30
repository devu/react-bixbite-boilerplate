import Emitter from './Emitter'

class Core extends Emitter {
  registerControlers = controlers => {
    controlers.forEach(controler => this.registerControler(controler))
  }

  registerServices = services => {
    services.forEach(service => this.registerControler(service))
  }
}

export default Core