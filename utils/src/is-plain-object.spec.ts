import assert from "assert";
import { describe, it } from "vitest";
import { isPlainObject } from "./is-plain-object";

describe("Same-Realm Server Tests", function () {
  it("should return `true` if the object is created by the `Object` constructor.", function () {
    assert(isPlainObject(Object.create({})));
    assert(isPlainObject(Object.create(Object.prototype)));
    assert(isPlainObject({ foo: "bar" }));
    assert(isPlainObject({}));
    assert(isPlainObject(Object.create(null)));
  });

  it("should return `false` if the object is not created by the `Object` constructor.", function () {
    function Foo(this: any) {
      this.abc = {};
    }

    assert(!isPlainObject(/foo/));
    assert(!isPlainObject(function () {}));
    assert(!isPlainObject(1));
    assert(!isPlainObject(["foo", "bar"]));
    assert(!isPlainObject([]));
    assert(!isPlainObject(new Foo()));
    assert(!isPlainObject(null));
  });
});
