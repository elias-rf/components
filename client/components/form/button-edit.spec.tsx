import { fireEvent, render } from "@testing-library/react";
import { UseFormReturn } from "react-hook-form";
import { vi } from "vitest";
import { ButtonEdit } from "./button-edit";

describe("ButtonEdit", () => {
  test("disabled: status!=view: ", async () => {
    const onStatus = vi.fn();
    const onClick = vi.fn();
    const form = {
      reset: vi.fn(),
    } as unknown as UseFormReturn<any>;

    const { getByText } = render(
      <ButtonEdit
        form={form}
        status="edit"
        onStatus={onStatus}
        onClick={onClick}
      />
    );
    const button = getByText("Editar");

    expect(button).toBeDisabled();
  });

  test("onClick change status to edit", async () => {
    const onStatus = vi.fn();
    const onClick = vi.fn();
    const form = {
      reset: vi.fn(),
    } as unknown as UseFormReturn<any>;

    const { getByText } = render(
      <ButtonEdit
        form={form}
        status="view"
        onStatus={onStatus}
        onClick={onClick}
      />
    );

    const button = getByText("Editar");

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
    expect(onStatus).toHaveBeenCalledWith("edit");
    expect(button).toBeEnabled();
  });
});
