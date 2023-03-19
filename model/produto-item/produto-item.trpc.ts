import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const produtoItemModel = container.resolve("produtoItemModel");

export const produtoItemRouter = router(crudProcedureFactory(produtoItemModel));
