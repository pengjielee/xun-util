import assert from "assert";
import upperFirst from "../src/upperFirst.js";

describe("upperFirst", function () {
  it("hello应该返回Hello", function () {
    assert.strictEqual(upperFirst("hello"), "Hello");
  });
});
