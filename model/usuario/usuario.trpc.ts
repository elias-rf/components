import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const usuarioModel = container.resolve("usuarioModel");

export const usuarioRouter = router(crudProcedureFactory(usuarioModel));
