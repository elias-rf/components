import { TColumn } from "@/client/components/table";
import { TPeriodo } from "@/models/cliente/cliente.type";
import { day } from "@/utils/date/day";
import { zsr } from "@/utils/zod/z-refine";
import { zd, zod } from "@/utils/zod/zod";

export function getSchema(args: TPeriodo): TColumn[] {
  zod(
    args,
    zd.object({
      inicio: zd.string().superRefine(zsr.date),
      fim: zd.string().superRefine(zsr.date),
    })
  );
  const rsp: TColumn[] = [
    {
      name: "categoria",
      label: "Produto",
    },
  ];
  let dtInicio = day(args.inicio);
  const dtFim = day(args.fim).add(1, "month");
  while (dtInicio.format("YYYY-MM") !== dtFim.format("YYYY-MM")) {
    rsp.push({
      name: dtInicio.format("YYYY-MM"),
      label: dtInicio.format("YYYY-MM"),
    });
    dtInicio = dtInicio.add(1, "month");
  }
  return rsp;
}
