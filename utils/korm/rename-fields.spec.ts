import { renameNameToField } from "./rename-fields";

const fields = {
  id: "agenda_telefone_id",
  name: "nome",
  department: "setor",
  email: "mail",
};

describe("renameFields", () => {
  it("renameNameToField", () => {
    expect(renameNameToField(["agenda_telefone_id", "setor"], fields)).toEqual([
      "id",
      "department",
    ]);
    expect(
      renameNameToField({ agenda_telefone_id: 1, setor: 2 }, fields)
    ).toEqual({
      id: 1,
      department: 2,
    });
    expect(renameNameToField("agenda_telefone_id", fields)).toEqual("id");
  });
});
