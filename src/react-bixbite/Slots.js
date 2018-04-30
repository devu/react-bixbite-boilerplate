import Slot from './Slot'

class Slots {
  constructor() {
    let h
    let t
    let i = -1
    this.asl = (uid, cb) => {
      const cs = new Slot(uid, cb)
      cs.i = i++
      h ? (h.n = cs) : (t = cs)
      h = cs
    }
    this.rsl = uid => {
      let w = t
      let p
      while (w.n && w.uid !== uid) {
        p = w
        w = w.n
      }
      if (p && w.n) {
        p.n = w.n
      }
      p = null
      w = null
      i--
      if (i < 0) {
        h = null
        t = null
      }
    }
    this.brc = s => {
      let w = t
      while (w.n) {
        w.send.call(w.send._c, s)
        w = w.n
      }
      w.send.call(w.send._c, s)
    }
    this.gsl = uid => {
      let w = t
      while (w.n) {
        if (w.uid === uid) return w
        w = w.n
      }
      return w.uid === uid ? w : null
    }
  }
}

export default Slots