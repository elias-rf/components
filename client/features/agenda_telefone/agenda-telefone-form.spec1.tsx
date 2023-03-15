import { render, screen } from "@testing-library/react";
import { AgendaTelefoneForm } from "./agenda-telefone-form";

describe("AgendaTelefoneForm", () => {
  it("component default", () => {
    const { debug } = render(
      <AgendaTelefoneForm id={{ agenda_telefone_id: 1 }} />
    );
    debug();
    expect(screen.getByTestId("buttonSave")).toBeDefined();
    expect(screen.getByTestId("buttonNew")).toHaveTextContent("Novo");
  });
});
