import { container } from "../../model/container";
import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { TAgendaTelefoneModel } from "./agenda-telefone.type";

const agendaTelefoneModel = container.resolve("agendaTelefoneModel");

export const agendaTelefoneRouter = router(
  crudProcedureFactory<TAgendaTelefoneModel>(agendaTelefoneModel)
);
