function Spy(target, method) {
    this.count = 0
    const spy = this
    const original = target[method]

    target[method] = function () {
        spy.count++
        return original.apply(target, arguments)
    }
    return this
}

module.exports = Spy