import { columnNameMappers } from "./column-name-mappers";

const colToProp = {
  id: "agenda_telefone_id",
  name: "nome",
  department: "setor",
  email: "email",
};

it("deve converter database --> code", () => {
  expect(
    columnNameMappers(colToProp).format({ id: 1, department: "dev" })
  ).toEqual({
    agenda_telefone_id: 1,
    setor: "dev",
  });
});

it("deve converter code --> database", () => {
  expect(
    columnNameMappers(colToProp).parse({ agenda_telefone_id: 1, setor: "dev" })
  ).toEqual({
    id: 1,
    department: "dev",
  });
});
