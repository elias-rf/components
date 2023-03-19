import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const pedidoItemModel = container.resolve("pedidoItemModel");

export const pedidoItemRouter = router(crudProcedureFactory(pedidoItemModel));
