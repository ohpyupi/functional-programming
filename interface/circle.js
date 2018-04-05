const shapeInterface = require('./shape.interface.js');

/**
 * @param {number} radius
 * @return {Circle}
 */
const circle = radius => {
  const proto = {
    radius,
    type: 'Circle',
    area: args => Math.PI * Math.pow(args.radius, 2),
  };
  const basics = shapeInterface(proto);
  const composite = Object.assign({}, basics);
  return Object.assign(Object.create(composite), { radius });
};

module.exports = circle;
