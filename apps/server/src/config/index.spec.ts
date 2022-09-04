import { expect, test } from "@jest/globals";
import { config } from "./index";
test("config.schema", () => {
  expect(Object.keys(config)).toEqual(["app", "auth", "db"]);
});
