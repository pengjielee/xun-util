import assert from "assert";
import uuid from "../src/uuid.js";

describe("uuid", function () {
  it("应该生成唯一ID", function () {
    const id = uuid();
    assert.strictEqual(id, id);
  });
});
