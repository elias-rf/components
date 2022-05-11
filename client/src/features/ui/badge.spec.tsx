import React from "react";
import { create, ReactTestInstance } from "react-test-renderer";
import { it, test, describe, expect } from "vitest";

import Badge from "./badge";

function findByText(root: ReactTestInstance, text: string) {
  return root.find((el) => el.children && el.children[0] === text);
}

test("Badge Default", () => {
  const component = create(<Badge>Teste</Badge>);
  const root = component.root;
  expect(findByText(root, "Teste")).toBeTruthy();
});

test("Badge Clicável", () => {
  function mock() {}

  const component = create(<Badge onClick={mock}>Teste</Badge>);
  const root = component.root;
  expect(findByText(root, "Teste")).toBeTruthy();
});

test("Badge Clicável e Fechável", () => {
  function mock() {}

  const component = create(
    <Badge
      onClick={mock}
      onClose={mock}
    >
      Teste
    </Badge>
  );
  const root = component.root;
  expect(findByText(root, "Teste")).toBeTruthy();
});
