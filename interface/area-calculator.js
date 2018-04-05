/**
 * @param {array=[]} shapes
 * @return {AreaCalculator}
 */
const areaCalculator = (shapes = []) => {
  const proto = {
    type: 'AreaCalculator',
    sum() {
      const area = [];
      for (shape of this.shapes) {
        if (Object.getPrototypeOf(shape).type === 'ShapeInterface') {
          area.push(shape.area());
        } else {
          throw new Error('this is not a shapeInterface object.');
        }
      }
      return area.reduce((s, c) => (s += c), 0);
    },
  };
  return Object.assign(Object.create(proto), { shapes });
};

module.exports = areaCalculator;
