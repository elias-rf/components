import { Box } from "@/client/components/ui";
import { TSelection } from "@/types";
import { day } from "@/utils/date/day";
import React from "react";
import { EsterilizacaoInternaDiario } from "./est-int-diario";
import { EsterilizacaoInternaMensal } from "./est-int-mensal";
import { EsterilizacaoInternaModelo } from "./est-int-modelo";
import { EsterilizacaoInternaProduto } from "./est-int-produto";

type EsterilizacaoInternaProp = {
  dia?: string;
  onState?: (event: any) => void;
};

export function EstInt({ onState, dia }: EsterilizacaoInternaProp) {
  const [mesCorrente, setMesCorrente] = React.useState<{ mes: string }[]>([]);
  const [diaCorrente, setDiaCorrente] = React.useState<{ dia: string }[]>([]);
  const [produtoCorrente, setProdutoCorrente] = React.useState<
    { produto?: string }[]
  >([]);

  const mesInicial = { mes: day(dia).subtract(13, "month").format("YYYY-MM") };

  function handleOnChangeMensal(event: TSelection) {
    if (event[0].mes && event[0].mes === mesCorrente[0]?.mes) {
      return setMesCorrente([]);
    }
    setMesCorrente([{ mes: event[0].mes }]);
  }

  function handleOnChangeDiario(event: TSelection) {
    if (event[0].dia && event[0].dia === diaCorrente[0]?.dia) {
      return setDiaCorrente([]);
    }
    setDiaCorrente([{ dia: event[0].dia }]);
  }

  function handleOnChangeProduto(event: TSelection) {
    if (event[0].produto && event[0].produto === produtoCorrente[0]?.produto) {
      return setProdutoCorrente([]);
    }
    setProdutoCorrente([{ produto: event[0].produto }]);
  }

  React.useEffect(() => {
    onState && onState({ mesCorrente, diaCorrente, produtoCorrente });
  }, [onState, mesCorrente, diaCorrente, produtoCorrente]);

  return (
    <div className={"flex"}>
      <div className={"p-2"}>
        <EsterilizacaoInternaMensal
          mesInicial={mesInicial}
          mesCorrente={mesCorrente}
          onSelection={handleOnChangeMensal}
        >
          <Box
            sx={{
              mb: 4,
              p: 1,
              border: "2px solid rgba(25, 118, 210, 0.2)",
            }}
          >
            <EsterilizacaoInternaDiario
              mesCorrente={mesCorrente}
              diaCorrente={diaCorrente}
              onSelection={handleOnChangeDiario}
            >
              <Box
                sx={{
                  mb: 4,
                  p: 1,
                  border: "2px solid rgba(25, 118, 210, 0.2)",
                }}
              >
                <EsterilizacaoInternaProduto
                  diaCorrente={diaCorrente}
                  produtoCorrente={produtoCorrente}
                  onSelection={handleOnChangeProduto}
                >
                  <EsterilizacaoInternaModelo
                    diaCorrente={diaCorrente}
                    produtoCorrente={produtoCorrente}
                  ></EsterilizacaoInternaModelo>
                </EsterilizacaoInternaProduto>
              </Box>
            </EsterilizacaoInternaDiario>
          </Box>
        </EsterilizacaoInternaMensal>
      </div>
    </div>
  );
}
