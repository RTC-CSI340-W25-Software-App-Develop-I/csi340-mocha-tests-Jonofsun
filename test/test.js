// Importing the Chai library to use its assert method, which offers more features than the built-in Node.js assertions
import { assert } from "chai";
//We are importing our Functions from src/index.js
import {
  helloWorld,
  addition,
  subtraction,
  multiplication,
  division,
  remainder,
  exponentiation,
} from "../src/index.js";

describe("hellowWorld function", function () {
  it("should return a string", function () {
    const result = helloWorld();
    assert.typeOf(result, "string", "Result should be a string");
  });

  it('should return "Hello World"', function () {
    const result = helloWorld();
    assert.equal(result, "Hello World", 'Result should be "Hello World!"');
  });
});

describe("addition function", function () {
  it("5 + 10 should return 15", function () {
    const result = addition(5, 10);
    assert.equal(result, 15, "Result should be 15");
  });
});

describe("subtraction function", function () {
  it("10 - 5 should return 5", function () {
    const result = subtraction(10, 5);
    assert.equal(result, 5, "Result should be 5");
  });
});

describe("multiplication function", function () {
  it("5 * 10 should return 50", function () {
    const result = multiplication(5, 10);
    assert.equal(result, 50, "Result should be 50");
  });
});

describe("division function", function () {
  it("10 / 5 should return 2", function () {
    const result = division(10, 5);
    assert.equal(result, 2, "Result should be 2");
  });
});

describe("remainder function", function () {
  it("10 % 5 should return 0", function () {
    const result = remainder(10, 5);
    assert.equal(result, 0, "Result should be 0");
  });
});

describe("exponentiation function", function () {
  it("2 ^ 3 should return 8", function () {
    const result = exponentiation(2, 3);
    assert.equal(result, 8, "Result should be 8");
  });
});
