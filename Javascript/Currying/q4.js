let counter = 0
const badSolution = (a) => {
    if (a == null) {
        return counter
    }
    counter += a
    return badSolution
}


// const betterSolution = (initial) => {
//     let totalArray = [initial]
//     return (adding) => {
//         if (adding == null) {
//             return totalArray.reduce((sum, x) => {
//                 return sum += x
//             })
//         }
//         totalArray.push(adding)
//     }
// }



module.exports = badSolution