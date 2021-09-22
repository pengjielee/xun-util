import assert from "assert";
import arrayAllEqual from "../src/arrayAllEqual.js";

describe("arrayAllEqual", function () {
  it("数组[1,1,1]应该返回true", function () {
    assert.strictEqual(arrayAllEqual([1, 1, 1]), true);
  });

  it("数组[1,1,2]应该返回false", function () {
    assert.strictEqual(arrayAllEqual([1, 1, 2]), false);
  });
});
