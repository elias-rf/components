import { container } from "../../model/container";
import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";

const cidadeModel = container.resolve("cidadeModel");

export const cidadeRouter = router(crudProcedureFactory(cidadeModel));
