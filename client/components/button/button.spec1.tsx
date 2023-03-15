import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it("component default", () => {
    render(<Button onClick={() => null}>TESTE</Button>);

    expect(screen.getByTestId("button")).toBeDefined();
    expect(screen.getByTestId("button")).toHaveTextContent("TESTE");
    expect(() => screen.getByTestId("badge-button-close")).toThrow();
  });

  it("component clickable", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>TESTE</Button>);

    fireEvent.click(screen.getByTestId("button"));
    expect(screen.getByTestId("button")).toBeDefined();
    expect(screen.getByTestId("button")).toHaveTextContent("TESTE");
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
