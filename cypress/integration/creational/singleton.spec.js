import Singleton from "../../../src/creational/singleton/singleton";

describe('Singleton Test', function() {
  it('should have matching random numbers', function() {

    const singleA = new Singleton();
    const singleB = new Singleton();

    expect(singleA.randomNumber).to.equal(singleB.randomNumber)
  })
}) 
