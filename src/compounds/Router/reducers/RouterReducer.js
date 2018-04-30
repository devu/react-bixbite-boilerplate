/* eslint no-console: 0 */
class RouterReducer {
  init(){
    console.log('RouteReducer', window.location)
    this.on('ROUTER_INIT', () => {
      console.log('RouterReducer:: work out location', window.location)
    })
  }
}

export default RouterReducer