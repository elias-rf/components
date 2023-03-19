import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const produtoModel = container.resolve("produtoModel");

export const produtoRouter = router(crudProcedureFactory(produtoModel));
