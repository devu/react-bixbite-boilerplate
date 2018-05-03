import Slots from './Slots'

class Emitter {
  constructor(id) {
    this._uid = -1
    this.id = id
    this.channels = {
      channelC: {},
      channelD: {},
      channelV: {}
    }
  }

  registerComponent = c => {
    const { channelC, channelV } = this.channels
    c.uid = `@${this.getUID()}::${this.id}`
    c.on = (type, cb) => this.addSlot(channelV, c.uid, type, cb, c)
    c.send = (type, signal) => this.broadcast(channelC, type, signal)
  }

  registerReducer = R => {
    const { channelC, channelD, channelV } = this.channels
    const uid = `@${this.getUID()}::${this.id}`
    const reducer = new R()
    reducer.uid = uid
    reducer.on = (type, cb) => this.addSlot(channelC, uid, type, cb, R)
    reducer.send = (type, signal) => this.broadcast(channelV, type, signal)
    reducer.request = (type, signal) => this.broadcast(channelD, type, signal)
    reducer.emit = (type, signal) => this.broadcast(channelC, type, signal)
    reducer.init()
    return reducer
  }

  registerService = S => {
    const { channelC, channelD } = this.channels
    const uid = `@${this.getUID()}::${this.id}`
    const service = new S()
    service.uid = uid
    service.on = (type, cb) => this.addSlot(channelD, uid, type, cb, S)
    service.respond = (type, signal) => this.broadcast(channelC, type, signal)
    service.init()
    return service
  }

  addSlot = (channel, callerUID, type, callback, c) => {
    if (!channel[type]) channel[type] = new Slots()
    callback._c = c
    channel[type].asl(callerUID, callback)
  }

  removeSlot = (channel, callerUID, type) => {
    const slots = channel[type]
    if (!slots || !slots.gsl(callerUID)) return

    slots.rsl(callerUID)
    if (slots.numSlots === 0) delete this.channel[type]
  }

  broadcast = (channel, type, signal) => {
    if (!channel[type]) return
    channel[type].brc(signal)
  }

  emit = type => {
    this.broadcast(this.channelC, type, this.signal)
  }

  getUID = () => (this._uid += 1)
}

export default Emitter
