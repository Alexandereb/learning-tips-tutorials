var num = 10;

function repeat(operation, num) {
  if (num <= 0) return
  operation()
  return repeat(operation, --num)
}

module.exports = repeat
































//coderhouse official solution
// function repeat(operation, num) {
//   if (num <= 0) return
//   operation()
//   return repeat(                                                                                                                                                             , --num)
// }
