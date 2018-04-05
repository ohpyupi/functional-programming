/**
 * @param {object} state
 * @return {ShapeInterface}
 */
const shapeInterface = state => ({
  type: 'ShapeInterface',
  area: () => state.area(state),
});

module.exports = shapeInterface;
