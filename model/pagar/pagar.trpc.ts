import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const pagarModel = container.resolve("pagarModel");

export const pagarRouter = router(crudProcedureFactory(pagarModel));
