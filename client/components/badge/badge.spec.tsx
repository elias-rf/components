import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { Badge } from "./badge";

describe("Badge", () => {
  it("component default", () => {
    render(<Badge>TESTE</Badge>);

    expect(screen.getByTestId("badge-span")).toBeDefined();
    expect(screen.getByTestId("badge-span")).toHaveTextContent("TESTE");
    expect(() => screen.getByTestId("badge-button-close")).toThrow();
  });

  it("component clickable", () => {
    const handleClick = vi.fn();
    render(<Badge onClick={handleClick}>TESTE</Badge>);

    fireEvent.click(screen.getByTestId("badge-span"));
    expect(screen.getByTestId("badge-span")).toBeDefined();
    expect(screen.getByTestId("badge-span")).toHaveTextContent("TESTE");
    expect(() => screen.getByTestId("badge-button-close")).toThrow();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("component closable", () => {
    const handleClose = vi.fn();
    render(<Badge onClose={handleClose}>TESTE</Badge>);
    fireEvent.click(screen.getByTestId("badge-button-close"));

    expect(screen.getByTestId("badge-span")).toBeDefined();
    expect(screen.getByTestId("badge-span")).toHaveTextContent("TESTE");
    expect(screen.getByTestId("badge-button-close")).toBeDefined();
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
