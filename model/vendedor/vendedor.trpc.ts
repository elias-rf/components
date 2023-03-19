import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const vendedorModel = container.resolve("vendedorModel");

export const vendedorRouter = router(crudProcedureFactory(vendedorModel));
