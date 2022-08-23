import React from "react";
import type { Action } from "../../../../types";
import { Label } from "../../components/label";
import { Select } from "../../components/select";
import { day } from "../../lib/day";
import { OperacaoDiario } from "./operacao-diario";
import { OperacaoMensal } from "./operacao-mensal";
import { OperacaoModelo } from "./operacao-modelo";
import { OperacaoProduto } from "./operacao-produto";
import { OperacaoTurno } from "./operacao-turno";

export function Operacao() {
  const [mesCorrente, setMesCorrente] = React.useState([]);
  const [diaCorrente, setDiaCorrente] = React.useState([]);
  const [produtoCorrente, setProdutoCorrente] = React.useState([]);
  const [operacaoCorrente, setOperacaoCorrente] = React.useState("3058");

  const mesInicial = day().subtract(13, "month").format("YYYY-MM");

  function handleDispatchMensal(action: Action) {
    // switch (action.type) {
    //   case tableActionTypes.select:
    //     setMesCorrente(action.payload);
    //     break;
    // }
  }

  function handleDispatchDiario(action: Action) {
    // switch (action.type) {
    //   case tableActionTypes.select:
    //     setDiaCorrente(action.payload);
    //     break;
    // }
  }

  function handleDispatchProduto(action: Action) {
    // switch (action.type) {
    //   case tableActionTypes.select:
    //     setProdutoCorrente(action.payload);
    //     break;
    // }
  }

  function handleSelect(event: any) {
    setOperacaoCorrente(event.target.value);
  }

  return (
    <div className="flex">
      <div className="p-2">
        <div className="mb-2 space-x-2">
          <Label>Operação</Label>
          <Select
            name="operacao"
            value={operacaoCorrente}
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
          dispatch={handleDispatchMensal}
        >
          <OperacaoDiario
            operacao={operacaoCorrente}
            mes={mesCorrente}
            diaCorrente={diaCorrente}
            dispatch={handleDispatchDiario}
          >
            <OperacaoProduto
              operacao={operacaoCorrente}
              dia={diaCorrente}
              produtoCorrente={produtoCorrente}
              dispatch={handleDispatchProduto}
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
