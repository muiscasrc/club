class LStorage {
  constructor () {
    this.LStorage = window.sessionStorage
  }

  read (key) {
    return JSON.parse(this.LStorage.getItem(key))
  }

  save (key, value) {
    this.LStorage.setItem(key, JSON.stringify(value))
  }

  readContext (store, context) {
    const tmpContext = context.split('.')
    var tmpData = this.read(store)
    while (tmpContext.length !== 0) {
      tmpData = tmpData[tmpContext[0]]
      tmpContext.shift()
    }

    return tmpData
  }

  countContext (store, context) {
    return this.readContext(store, context).length
  }
}

export default LStorage
