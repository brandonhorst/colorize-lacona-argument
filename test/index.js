var expect = require('chai').expect
var hashArgument = require('..')

describe('colorize-lacona-arguments', () => {
  it('hashes arguments to return a number', () => {
    var hashed = hashArgument('repository')
    expect(hashed).to.equal(2)
  })

  it('handles special cases', () => {
    var hashed = hashArgument('bookmark')
    expect(hashed).to.equal(2)
  })
})