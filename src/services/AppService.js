
/* eslint no-console: 0 */
/* request data from reducer -> (service) -> responds with data */
class AppService
{
  init(){
    console.log('AppService::init')
    this.on('APP_INIT', () => {
      console.log('Application initialised')
    })
  }
}

export default AppService