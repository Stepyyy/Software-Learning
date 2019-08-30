const currying = (a) => {
    return (b) => {
        return a + b
    }
}


module.exports = currying