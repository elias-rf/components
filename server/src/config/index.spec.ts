import config from "./index";
import { test, it, describe, expect } from "vitest";
test("config.schema", () => {
  expect(Object.keys(config)).toEqual(["app", "auth", "db"]);
});
