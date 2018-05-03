/* browser support: https://caniuse.com/#search=onhashchange */

class RouterReducer {
  constructor() {
    this.isSupported = false
    this.currentHash = ''
    this.history = []
    this.routes = []
    this.defaultRoute = []
  }

  init() {
    this.on('ROUTER_INIT', children => {
      this.isSupported = 'onhashchange' in window
      if (this.isSupported) {
        children.map(child => {
          const { children, rule, isDefault } = child.props
          this.routes.push({ children, rule })
          if (isDefault) this.defaultRoute = children
        })
        this.currentHash = window.location.hash
        window.onhashchange = this.locationHashChanged
        this.send('ROUTE_HAS_CHANGED', { children: this.findRoute(), path: this.currentHash })
      }
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
