import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const clienteModel = container.resolve("clienteModel");

export const clienteRouter = router(crudProcedureFactory(clienteModel));
