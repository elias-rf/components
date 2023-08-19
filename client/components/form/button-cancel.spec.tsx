import { fireEvent, render } from "@testing-library/react";
import { UseFormReturn } from "react-hook-form";
import { vi, describe, test, expect } from "vitest";
import { ButtonCancel } from "./button-cancel";

describe("ButtonCancel", () => {
  test("disabled: status=view", async () => {
    const onStatus = vi.fn();
    const onClick = vi.fn();
    const form = {
      reset: vi.fn(),
    } as unknown as UseFormReturn<any>;

    const { getByText } = render(
      <ButtonCancel
        form={form}
        status="view"
        onStatus={onStatus}
        onClick={onClick}
      />
    );
    const button = getByText("Cancelar");

    expect(button).toBeDisabled();
  });

  test("onClick change status to view", async () => {
    const onStatus = vi.fn();
    const onClick = vi.fn();
    const form = {
      reset: vi.fn(),
    } as unknown as UseFormReturn<any>;

    const { getByText } = render(
      <ButtonCancel
        form={form}
        status="edit"
        onStatus={onStatus}
        onClick={onClick}
      />
    );

    const button = getByText("Cancelar");

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
    expect(onStatus).toHaveBeenCalledWith("view");
    expect(button).toBeEnabled();
  });
});
