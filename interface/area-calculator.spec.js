const circle = require('./circle.js');
const square = require('./square.js');
const areaCalculator = require('./area-calculator.js');

describe('areaCalculator', () => {
  it('should return an object.', () => {
    const calculator = areaCalculator();
    expect(calculator).toHaveProperty('shapes');
    expect(Object.getPrototypeOf(calculator)).toHaveProperty('sum');
  });
  describe('areaCalculator::sum', () => {
    it('should throw an error if an element of the argument shapes array is not of shapeInterface.', () => {
      try {
        const shapes = [{}];
        const calculator = areaCalculator(shapes);
        calculator.sum();
      } catch (e) {
        expect(e).toBeInstanceOf(Error);
        expect(e).toHaveProperty(
          'message',
          'this is not a shapeInterface object.'
        );
      }
    });
    it('should return the sum of the shapes in the number type.', () => {
      const shapes = [square(2), square(3), circle(4), circle(5)];
      const calculator = areaCalculator(shapes);
      const expected =
        square(2).area() +
        square(3).area() +
        circle(4).area() +
        circle(5).area();
      const sum = calculator.sum();
      expect(sum).toBe(expected);
    });
  });
});
