import { fireEvent, render } from "@testing-library/react";
import { UseFormReturn } from "react-hook-form";
import { vi } from "vitest";
import { ButtonDel } from "./button-del";

describe("ButtonDel", () => {
  test("disabled: status!=view", async () => {
    const onStatus = vi.fn();
    const onClick = vi.fn();
    const form = {
      reset: vi.fn(),
    } as unknown as UseFormReturn<any>;

    const { getByText } = render(
      <ButtonDel
        form={form}
        status="edit"
        onStatus={onStatus}
        onClick={onClick}
      />
    );
    const buttonExcluir = getByText("Excluir");

    fireEvent.click(buttonExcluir);

    expect(onClick).not.toHaveBeenCalled();
    expect(buttonExcluir).toBeDisabled();
  });

  test("status edit: on call onClick and confirm change status to view", async () => {
    const onStatus = vi.fn();
    const onClick = vi.fn();
    const form = {
      reset: vi.fn(),
    } as unknown as UseFormReturn<any>;

    const { getByText } = render(
      <ButtonDel
        form={form}
        status="view"
        onStatus={onStatus}
        onClick={onClick}
      />
    );

    const buttonExcluir = getByText("Excluir");
    fireEvent.click(buttonExcluir);
    const buttonConfirmar = getByText("Confirmar");
    fireEvent.click(buttonConfirmar);
    expect(onClick).toHaveBeenCalled();
    expect(onStatus).toHaveBeenCalledWith("view");
    expect(buttonExcluir).toBeEnabled();
  });

  test("status edit: on call onClick and cancel no changes", async () => {
    const onStatus = vi.fn();
    const onClick = vi.fn();
    const form = {
      reset: vi.fn(),
    } as unknown as UseFormReturn<any>;

    const { getByText } = render(
      <ButtonDel
        form={form}
        status="view"
        onStatus={onStatus}
        onClick={onClick}
      />
    );

    const buttonExcluir = getByText("Excluir");
    fireEvent.click(buttonExcluir);
    const buttonConfirmar = getByText("Cancelar");
    fireEvent.click(buttonConfirmar);
    expect(onClick).not.toHaveBeenCalled();
    expect(buttonExcluir).toBeEnabled();
  });
});
