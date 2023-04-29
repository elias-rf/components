import { TPeriodo } from "@mono/models/cliente/cliente.type";
import { TFieldDef } from "@mono/types";
import { day } from "@mono/utils/date/day";
import { zsr } from "@mono/utils/zod/z-refine";
import { zd, zod } from "@mono/utils/zod/zod";

export function getSchema(args: TPeriodo) {
  zod(
    args,
    zd.object({
      inicio: zd.string().superRefine(zsr.date),
      fim: zd.string().superRefine(zsr.date),
    })
  );
  const rsp: TFieldDef[] = [
    {
      name: "categoria",
      label: "Produto",
      primaryKey: true,
    },
  ];
  let dtInicio = day(args.inicio);
  const dtFim = day(args.fim).add(1, "month");
  while (dtInicio.format("YYYY-MM") !== dtFim.format("YYYY-MM")) {
    rsp.push({
      name: dtInicio.format("YYYY-MM"),
      typeField: "float",
      fieldClass: "text-right",
    });
    dtInicio = dtInicio.add(1, "month");
  }
  return rsp;
}
