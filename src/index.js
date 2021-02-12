
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (typeof(matrix) === 'undefined') return [];
  return matrix.reduce( (acc, val, i) => i % 2 === 0 ? acc.concat(val) : acc.concat(val.reverse()), [] );
}
