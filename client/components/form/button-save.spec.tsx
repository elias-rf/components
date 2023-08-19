import { fireEvent, render } from "@testing-library/react";
import { UseFormReturn } from "react-hook-form";
import { vi, describe, test, expect } from "vitest";
import { ButtonSave } from "./button-save";

describe("ButtonSave", () => {
  test("disabled: !formState.isDirty", async () => {
    const onStatus = vi.fn();
    const onClick = vi.fn();
    const form = {
      reset: vi.fn(),
      formState: {
        isDirty: false,
      },
    } as unknown as UseFormReturn<any>;

    const { getByText } = render(
      <ButtonSave
        form={form}
        onStatus={onStatus}
        onClick={onClick}
      />
    );
    const button = getByText("Salvar");
    expect(button).toBeDisabled();
  });

  test("onClick change status to view", async () => {
    const onStatus = vi.fn();
    const onClick = vi.fn();
    const form = {
      reset: vi.fn(),
      formState: {
        isDirty: true,
      },
      handleSubmit: (fn: any) => () => fn(),
    } as unknown as UseFormReturn<any>;

    const { getByText, debug } = render(
      <ButtonSave
        form={form}
        onStatus={onStatus}
        onClick={onClick}
      />
    );
    debug();
    const button = getByText("Salvar");

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
    expect(onStatus).toHaveBeenCalledWith("view");
    expect(button).toBeEnabled();
  });
});
