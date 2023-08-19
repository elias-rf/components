import { Box, MenuItem, TextField } from "@mui/material";
import { TSelection } from "@/types";
import { day } from "@/utils/date/day";
import React, { useMemo } from "react";
import { OperacaoDiario } from "./operacao-diario";
import { OperacaoMensal } from "./operacao-mensal";
import { OperacaoModelo } from "./operacao-modelo";
import { OperacaoProduto } from "./operacao-produto";
import { OperacaoTurno } from "./operacao-turno";

type OperacaoProp = {
  dia?: string;
  onState?: (event: any) => void;
};

export function Operacao({ onState, dia }: OperacaoProp) {
  const [mesCorrente, setMesCorrente] = React.useState<{ mes?: string }[]>([]);
  const [diaCorrente, setDiaCorrente] = React.useState<{ dia?: string }[]>([]);
  const [produtoCorrente, setProdutoCorrente] = React.useState<
    {
      produto?: string;
    }[]
  >([]);
  const [operacaoCorrente, setOperacaoCorrente] = React.useState<{
    operacao?: string;
  }>({
    operacao: "3058",
  });

  const mesInicial = useMemo(
    () => ({ mes: day(dia).subtract(13, "month").format("YYYY-MM") }),
    [dia]
  );

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

  function handleSelect(event: React.ChangeEvent<HTMLInputElement>) {
    setOperacaoCorrente({ operacao: event.target.value });
  }

  React.useEffect(() => {
    onState &&
      onState({
        mesInicial,
        mesCorrente,
        diaCorrente,
        produtoCorrente,
        operacaoCorrente,
      });
  }, [
    onState,
    mesInicial,
    mesCorrente,
    diaCorrente,
    produtoCorrente,
    operacaoCorrente,
  ]);

  return (
    <div className={"flex"}>
      <div className={"p-2"}>
        <div className={"mb-2 space-x-2"}>
          <TextField
            id="operacao"
            select
            label="Operação"
            value={operacaoCorrente.operacao || ""}
            onChange={handleSelect}
          >
            <MenuItem value="1010">1010 - Montagem lado 1</MenuItem>
            <MenuItem value="1015">1015 - Torneamento radial</MenuItem>
            <MenuItem value="2010">2010 - Montagem lado 2</MenuItem>
            <MenuItem value="2018">2018 - Fresagem</MenuItem>
            <MenuItem value="2025">2025 - Desmontagem e limpeza</MenuItem>
            <MenuItem value="3042">3042 - Inspeção</MenuItem>
            <MenuItem value="3045">3045 - Dioptria</MenuItem>
            <MenuItem value="3058">3058 - Esterilização a vapor</MenuItem>
            <MenuItem value="3065">3065 - Empacotamento</MenuItem>
            <MenuItem value="3070">3070 - Inspeção final</MenuItem>
          </TextField>
        </div>
        <OperacaoMensal
          operacao={operacaoCorrente}
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
            <OperacaoDiario
              operacao={operacaoCorrente}
              mes={mesCorrente}
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
                <OperacaoProduto
                  operacao={operacaoCorrente}
                  dia={diaCorrente}
                  produtoCorrente={produtoCorrente}
                  onSelect={handleOnChangeProduto}
                >
                  <OperacaoModelo
                    operacao={operacaoCorrente}
                    dia={diaCorrente}
                    produtoCorrente={produtoCorrente}
                  />
                </OperacaoProduto>
                <OperacaoTurno
                  operacao={operacaoCorrente}
                  dia={diaCorrente}
                ></OperacaoTurno>
              </Box>
            </OperacaoDiario>
          </Box>
        </OperacaoMensal>
      </div>
    </div>
  );
}
