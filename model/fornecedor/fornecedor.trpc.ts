import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const fornecedorModel = container.resolve("fornecedorModel");

export const fornecedorRouter = router(crudProcedureFactory(fornecedorModel));
