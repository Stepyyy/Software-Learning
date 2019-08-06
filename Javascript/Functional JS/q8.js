function duckCount() {
	const array = Arracdy.prototype.slice.call(arguments)
	const mapped = array.map((item) => {	
		return Object.prototype.hasOwnProperty.call(item, "quack")
	})
	return mapped.filter((item) => {
		return item == true
	}).length
}

module.exports = duckCount