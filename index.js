var Batch = require('batch')
var Emitter = require('emitter')

module.exports = function(array, task, complete) {
	return new AsyncMap(array, task, complete)
}

module.exports.AsyncMap = AsyncMap

function AsyncMap(array, task, complete) {
	Emitter.call(this)
	this.batch = new Batch()
	array.forEach(function(item) {
		batch.push(function(next) {
			task(item, next)
		})
	})
	this.batch.on('progress')
	this.batch.end(complete)
}

Emitter(AsyncMap.prototype)
