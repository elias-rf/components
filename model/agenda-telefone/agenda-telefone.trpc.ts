import { container } from "../../model/container";
import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";

const agendaTelefoneModel = container.resolve("agendaTelefoneModel");

export const agendaTelefoneRouter = router(
  crudProcedureFactory(agendaTelefoneModel)
);
