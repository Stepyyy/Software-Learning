function arrayMap(arr, fn) {
    return arr.reduce((countMap, item) => {
        countMap.push(fn(item))
        return countMap
    }, [])
}

// arrayMap([1, 2, 3, 4], item => {
//     return item * 2
// })


module.exports = arrayMap