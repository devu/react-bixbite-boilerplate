/* browser support: https://caniuse.com/#search=onhashchange */

class RouterReducer {
  constructor() {
    this.isSupported = false
    this.currentHash = ''
    this.history = []
    this.routes = []
  }

  init() {
    this.on('ROUTER_INIT', children => {
      this.isSupported = ('onhashchange' in window)
      if (this.isSupported) {
        children.map(child => {
          const { children, rule } = child.props
          this.routes.push({ children, rule })
        })
        this.currentHash = window.location.hash
        window.onhashchange = this.locationHashChanged
        this.send('ROUTE_HAS_CHANGED', this.findRoute())
      }
    })
  }

  locationHashChanged = () => {
    const hash = window.location.hash
    if (hash !== this.currentHash) {
      this.history.push(this.currentHash)
      this.currentHash = hash
      this.send('ROUTE_HAS_CHANGED', this.findRoute())
    }
  }

  findRoute = () => {
    let route = this.routes.find(o => this.currentHash.includes(o.rule))
    return route.children
  }
}

export default RouterReducer
