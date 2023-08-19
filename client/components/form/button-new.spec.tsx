import { render } from "@testing-library/react";
import { UseFormReturn } from "react-hook-form";
import { vi, describe, test, expect } from "vitest";
import { ButtonNew } from "./button-new";

describe("ButtonNew", () => {
  test("disabled: status!=view: ", async () => {
    const onStatus = vi.fn();
    const onClick = vi.fn();
    const form = {
      reset: vi.fn(),
    } as unknown as UseFormReturn<any>;

    const { getByText } = render(
      <ButtonNew
        form={form}
        status="edit"
        onStatus={onStatus}
        onClick={onClick}
      />
    );
    const button = getByText("Novo");
    expect(button).toBeDisabled();
  });
});
