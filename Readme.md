# async-map

  Asynchronous Array Map

An alternative interface to [batch](https://github.com/component/batch) inspired by the awesome [async](https://github.com/caolan/async) library.


### Currently in development. Do not use :D

## Installation

    $ component install timoxley/async-map

## Example

todo

 >```js

 >var map = require('async-map')
 >map([1, 2], function(item, next) {
   >next(null, item)
 >}, function(err, results) {
   >assert.ifError(err)
   >assert.deepEqual(results, [1, 2])
   >done()
 >})

 >```

## API

todo

   >map(array, task, complete)

 >Calls `task` for each item in `array`, then calls `complete` when done.

 >Tasks are functions whose first param will be the current item, the
 >second a callback:

 >```js
 >function(item, next) {

 >}
 >```

 >The callback takes two parameters, an error (if any) and an item
 >```js
 >function(item, next) {
   >next(err, item)
 >}
 >```

## License

  MIT
