import { container } from "./container";

describe("container", () => {
  it("list", () => {
    expect(
      Object.keys(container.registrations).filter((name) =>
        name.endsWith("Model")
      ).length
    ).toEqual(37);
  });
});
