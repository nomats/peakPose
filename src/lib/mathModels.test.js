import MathModels from './mathModels';



it('MathModels#angle can calculate angles correctly', () => {
  var _mm = new MathModels()
  expect(_mm.angle({x: 12, y: 5},{x: 0, y: 0},{x: 12, y: 0})).toEqual(23)
});

it('MathModels#angle can calculate angles correctly', () => {
  var _mm = new MathModels()
  expect(_mm.angle({x: 0, y: 2},{x: 5, y: 5},{x: 2, y: 0})).toEqual(28)
});

it('MathModels#angle can calculate angles correctly', () => {
  var _mm = new MathModels()
  expect(_mm.angle({x: 2, y: 0},{x: 0, y: 2},{x: 5, y: 5})).toEqual(76)
});
