import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const pedidoModel = container.resolve("pedidoModel");

export const pedidoRouter = router(crudProcedureFactory(pedidoModel));
