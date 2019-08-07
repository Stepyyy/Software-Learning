function bindingLog(namespace) {
    return console.log.bind(console, Array.from(arguments).join(" "))
}

module.exports = bindingLog