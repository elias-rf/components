import { TFieldClient } from "../../../types";
import { day } from "../../../utils/date/day";
import { z, zod } from "../../../utils/zod/z";
import { zsr } from "../../../utils/zod/z-refine";
import type { TPeriodo } from "../cliente.type";

export function getSchema(args: TPeriodo) {
  zod(
    args,
    z.object({
      inicio: z.string().superRefine(zsr.date),
      fim: z.string().superRefine(zsr.date),
    })
  );
  const rsp: TFieldClient[] = [
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
      type: "float",
      fieldClass: "text-right",
    });
    dtInicio = dtInicio.add(1, "month");
  }
  return rsp;
}
