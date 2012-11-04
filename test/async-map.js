it('passes items to tasks', function(done) {
  map([1, 2], function(item, next) {
    next(null, item)
  }, function(err, results) {
    assert.ifError(err)
    assert.deepEqual(results, [1, 2])
    done()
  })
})
