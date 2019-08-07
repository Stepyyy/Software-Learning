function logger(namespace) {
    return function () {
        console.log.apply(null, [namespace, Array.from(arguments).join(" ")])
    }
}

module.exports = logger