import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const diamanteModel = container.resolve("diamanteModel");

export const diamanteRouter = router(crudProcedureFactory(diamanteModel));
