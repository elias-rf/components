import React from "react";
import { day } from "../../../../utils/date/day";
import { Label } from "../../../components/form";
import { Select } from "../../../components/select/select";
import { OperacaoDiario } from "./operacao_diario";
import { OperacaoMensal } from "./operacao_mensal";
import { OperacaoModelo } from "./operacao_modelo";
import { OperacaoProduto } from "./operacao_produto";
import { OperacaoTurno } from "./operacao_turno";

type OperacaoProp = {
  dia?: string;
};

export function Operacao({ dia }: OperacaoProp) {
  const [mesCorrente, setMesCorrente] = React.useState<{ mes?: string }>({});
  const [diaCorrente, setDiaCorrente] = React.useState<{ dia?: string }>({});
  const [produtoCorrente, setProdutoCorrente] = React.useState<{
    produto?: string;
  }>({});
  const [operacaoCorrente, setOperacaoCorrente] = React.useState<{
    operacao?: string;
  }>({
    operacao: "3058",
  });

  const mesInicial = { mes: day(dia).subtract(13, "month").format("YYYY-MM") };

  function handleOnChange(event: any) {
    if (event.name === "mensal") setMesCorrente(event.value);
    if (event.name === "diario") setDiaCorrente(event.value);
    if (event.name === "produto") setProdutoCorrente(event.value);
  }

  function handleSelect(event: any) {
    setOperacaoCorrente(event.value);
  }

  return (
    <div className={"flex"}>
      <div className={"p-2"}>
        <div className={"mb-2 space-x-2"}>
          <Label name="operacao">Operação</Label>
          <Select
            name="operacao"
            value={operacaoCorrente.operacao || ""}
            onChange={handleSelect}
          >
            <option value="1010">1010 - Montagem lado 1</option>
            <option value="1015">1015 - Torneamento radial</option>
            <option value="2010">2010 - Montagem lado 2</option>
            <option value="2018">2018 - Fresagem</option>
            <option value="2025">2025 - Desmontagem e limpeza</option>
            <option value="3042">3042 - Inspeção</option>
            <option value="3045">3045 - Dioptria</option>
            <option value="3058">3058 - Esterilização a vapor</option>
            <option value="3065">3065 - Empacotamento</option>
            <option value="3070">3070 - Inspeção final</option>
          </Select>
        </div>
        <OperacaoMensal
          operacao={operacaoCorrente}
          mesInicial={mesInicial}
          mesCorrente={mesCorrente}
          onSelect={handleOnChange}
        >
          <OperacaoDiario
            operacao={operacaoCorrente}
            mes={mesCorrente}
            diaCorrente={diaCorrente}
            onSelect={handleOnChange}
          >
            <OperacaoProduto
              operacao={operacaoCorrente}
              dia={diaCorrente}
              produtoCorrente={produtoCorrente}
              onSelect={handleOnChange}
            >
              <OperacaoModelo
                operacao={operacaoCorrente}
                dia={diaCorrente}
                produto={produtoCorrente}
              />
            </OperacaoProduto>
            <OperacaoTurno
              operacao={operacaoCorrente}
              dia={diaCorrente}
            ></OperacaoTurno>
          </OperacaoDiario>
        </OperacaoMensal>
      </div>
    </div>
  );
}
