import assert from "assert";
import average from "../src/average.js";

describe("average", function () {
  it("数组[1,1,1]的平均值应该返回1", function () {
    assert.strictEqual(average([1, 1, 1]), 1);
  });

  it("数组[1,1,2]的平均值不应该返回1", function () {
    assert.notEqual(average([1, 1, 2]), 1);
  });
});
