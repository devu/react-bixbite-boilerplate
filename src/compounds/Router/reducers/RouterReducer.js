/* browser support: https://caniuse.com/#search=onhashchange */

const INIT = 'ROUTER_INIT'

class RouterReducer {
  constructor() {
    this.isSupported = false
    this.currentHash = '#'
    this.history = []
    this.routes = []
    this.defaultRoute = []
  }

  init() {
    this.on(INIT, ({ children, defaultPath }) => {
      this.isSupported = 'onhashchange' in window
      if (this.isSupported) {
        children.map(child => {
          const { children, rule, isDefault } = child.props
          this.routes.push({ children, rule })
          if (isDefault) this.defaultRoute = children
        })
        window.onhashchange = this.locationHashChanged
        window.location.hash = defaultPath || '/'
      }

      this.removeSlot(INIT)
    })
  }

  locationHashChanged = () => {
    const hash = window.location.hash
    if (hash !== this.currentHash) {
      this.history.push(this.currentHash)
      this.currentHash = hash
      this.send('ROUTE_HAS_CHANGED', { children: this.findRoute(), path: this.currentHash })
    }
  }

  findRoute = () => {
    let route = this.routes.find(o => this.currentHash.includes(o.rule))
    return route ? route.children : this.defaultRoute
  }
}

export default RouterReducer
