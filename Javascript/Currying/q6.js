curryItUp = (func) => {
    const arity = func.length

    return function yes() {
        const args = Array.prototype.slice.call(arguments, 0)
        if (args.length >= arity) {
            return func.apply(null, args)
        } else {
            return function arityNotMet() {
                const partialArgs = Array.prototype.slice.call(arguments, 0)
                return yes.apply(null, args.concat(partialArgs))
            }
        }
    }
}
module.exports = curryItUp
// const curried = curryItUp((a, b, c) => {
//     return a + b + c
// })

// console.log(curried(1, 2)(3)) 
// console.log(curried(1)(2, 3)) 
// console.log(curried(1)(2)(3)) 