const shapeInterface = require('./shape.interface.js');

/**
 * @param {number} length
 * @return {Square}
 */
const square = length => {
  const proto = {
    length,
    type: 'Square',
    area: args => Math.pow(args.length, 2),
  };
  const basics = shapeInterface(proto);
  const composite = Object.assign({}, basics);
  return Object.assign(Object.create(composite), { length });
};

module.exports = square;
