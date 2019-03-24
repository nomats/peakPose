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

it('MathModels#isStraight can deduce straight lines', () => {
  var _mm = new MathModels()
  expect(_mm.isStraight([{x: 2, y: 0},{x: 0, y: 2},{x: 5, y: 5}])).toEqual(false)
});

it('MathModels#isStraight can deduce straight lines', () => {
  var _mm = new MathModels()
  expect(_mm.isStraight([{x: 1, y: -0.5},{x: 3,y: -0.6},{x: 5,y: -0.7},{x: 7,y: -0.8},
     {x: 9, y:-0.9}, {x: 11, y:-1.0}])).toEqual(true)
});

it('MathModels#isStraight can deduce straight lines', () => {
  var _mm = new MathModels()
  expect(_mm.isStraight([{x: -1, y: -0.5},{x: -1.01,y: -0.6},{x: -1.02,y: -0.7},{x: -1.03,y: -0.8},
     {x: -1.04, y:-0.9}, {x: -1.05, y:-1.0}])).toEqual(true)
});

it('MathModels#isStraight can deduce straight lines', () => {
  var _mm = new MathModels()
  console.log("ourguy")
  expect(_mm.isStraight([{x: -1, y: 3},{x: 1,y: 3.1},{x: 3,y: 3.6},{x: 5,y: 3.3},
     {x: 7, y:2.9}, {x: 9, y:3.1}])).toEqual(true)
});

it('MathModels#isStraight can deduce straight lines', () => {
  var _mm = new MathModels()
  expect(_mm.isStraight([{x: -1, y: -9},{x: -1.01,y: 5},{x: -1.02,y: -3.7},{x: 1.03,y: -0.8},
     {x: 13.04, y:-0.9}, {x: -1.05, y:-1.0}])).toEqual(false)
});

it('MathModels#isHorizontal can deduce horizontal lines', () => {
  var _mm = new MathModels()
  expect(_mm.isHorizontal([{x: -1, y: 3},{x: 1,y: 3.1},{x: 3,y: 3.6},{x: 5,y: 3.3},
     {x: 7, y:2.9}, {x: 9, y:2.8}])).toEqual(true)
});
