var SPECIALCASES = {
  URL: 1,
  bookmark: 2,
  song: 2,
  contact: 1,
  relationship: 3
}

module.exports = function hashArgument (str) {
  const specialCase = SPECIALCASES[str]
  if (specialCase != null) return specialCase

  if (!str || str === '') return -1

  return Math.abs(str.split('').reduce(function (a,b) {
    a = ((a << 5) - a) + b.charCodeAt(0)
    return a & a
  }, 0)) % 8
}