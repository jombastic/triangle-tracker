import { Triangle } from './../src/triangle.js';

describe('Triangle', function() {  //suite
  var reusableTriangle;

  beforeEach(function() {
    reusableTriangle = new Triangle(5, 5, 5);
  });

  it('should show how beforeEach() works', function() {
    console.log(reusableTriangle);
  });

  it('should test whether a Triangle has three sides', function() { //spec
    var triangle = new Triangle(3, 4, 5);
    expect(triangle.side1).toEqual(3); //expectation and matcher
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).not.toEqual(6);
  });

  it('should correctly determine whether three lengths can be made into a triangle',
    function() {
      var notTriangle = new Triangle(3, 9, 22);
      expect(notTriangle.checkType()).toEqual('don\'t form a triangle');
    });

  it('should correctly determine whether the triangle is equilateral', function() {
    var equilateralTriangle = new Triangle(4, 4, 4);
    expect(equilateralTriangle.checkType()).toEqual('form an equilateral triangle');
  });

  it('should correctly determine whether the triangle is isosceles', function() {
    var isoscelesTriangle = new Triangle(4, 4, 6);
    expect(isoscelesTriangle.checkType()).toEqual('form an isosceles triangle');
  });

  it('should correctly determine whether the triangle is scalene', function() {
    var scaleneTriangle = new Triangle(4, 5, 6);
    expect(scaleneTriangle.checkType()).toEqual('form a scalene triangle');
  });
});
