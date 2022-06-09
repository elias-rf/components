import { create } from "react-test-renderer";
import { it, test, describe, expect } from "vitest";

import { MemoryRouter } from "react-router-dom";

import A from "./a";
import React from "react";

function findByText(root: any, text: string) {
  return root.find((el: any) => el.children && el.children[0] === text);
}

test.skip("A link", () => {
  const component = create(
    <MemoryRouter>
      <A href="facebook">Facebook</A>
    </MemoryRouter>
  );
  const root = component.root;

  expect(findByText(root, "Facebook").href).toBe("http://localhost/facebook");
});
