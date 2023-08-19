import { Grid, Typography } from "@mui/material";
import { day } from "@/utils/date/day";
import { trpc } from "@/rpc/utils/trpc";

function quantidadeProduto(data: any[] | undefined, prod: string) {
  if (!data) return 0;
  if (!data[0]) return 0;
  return data[0][prod] || 0;
}

export function TransferenciaMes() {
  const mesInicial = day().format("YYYY-MM");

  const dataTransferenciaMensal = trpc.nfSaida.transferenciaMensal.useQuery({
    mes: mesInicial,
  });

  return (
    <Grid container>
      <Grid xs={12}>
        <Typography variant="h5">Produção</Typography>
        <div className={"flex"}>
          <div className={"w-80 border border-gray-600 p-2"}>
            <div>LiteFlex</div>
            <div className={"text-8xl"}>
              {quantidadeProduto(dataTransferenciaMensal.data, "LITEFLEX")}
            </div>
          </div>
          <div className={"w-60"}>
            <div
              className={
                "flex flex-nowrap justify-between border border-gray-600 p-2"
              }
            >
              <div className={"w-28"}>Hilite</div>
              <div className={"items-end text-xl"}>
                {quantidadeProduto(dataTransferenciaMensal.data, "HILITE")}
              </div>
            </div>
            <div
              className={
                "flex flex-nowrap justify-between border border-gray-600 p-2"
              }
            >
              <div className={"w-28"}>Enlite</div>
              <div className={"text-xl"}>
                {quantidadeProduto(dataTransferenciaMensal.data, "ENLITE")}
              </div>
            </div>
            <div
              className={
                "flex flex-nowrap justify-between border border-gray-600 p-2"
              }
            >
              <div className={"w-28"}>Metil</div>
              <div className={"text-xl"}>
                {quantidadeProduto(
                  dataTransferenciaMensal.data,
                  "METILCELULOSE"
                )}
              </div>
            </div>
            <div
              className={
                "flex flex-nowrap justify-between border border-gray-600 p-2"
              }
            >
              <div className={"w-28"}>Corneal Ring</div>
              <div className={"text-xl"}>
                {quantidadeProduto(
                  dataTransferenciaMensal.data,
                  "CORNEAL RING"
                )}
              </div>
            </div>
            <div
              className={
                "flex flex-nowrap justify-between border border-gray-600 p-2"
              }
            >
              <div className={"w-28"}>Anel Capsular</div>
              <div className={"text-xl"}>
                {quantidadeProduto(
                  dataTransferenciaMensal.data,
                  "ANEL CAPSULAR"
                )}
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
