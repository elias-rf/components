import React from "react";
import { Action } from "../../../../types";
import { tableActionTypes } from "../../components";
import { day } from "../../lib/day";
import { EsterilizacaoInternaDiario } from "./est-int-diario";
import { EsterilizacaoInternaMensal } from "./est-int-mensal";
import { EsterilizacaoInternaModelo } from "./est-int-modelo";
import { EsterilizacaoInternaProduto } from "./est-int-produto";

export function EstInt() {
  const [mesCorrente, setMesCorrente] = React.useState([]);
  const [diaCorrente, setDiaCorrente] = React.useState([]);
  const [produtoCorrente, setProdutoCorrente] = React.useState([]);

  const mesInicial = day().subtract(13, "month").format("YYYY-MM");

  function handleDispatchMensal(action: Action) {
    switch (action.type) {
      case tableActionTypes.select:
        setMesCorrente(action.payload);
        break;
    }
  }
  function handleDispatchDiario(action: Action) {
    switch (action.type) {
      case tableActionTypes.select:
        setDiaCorrente(action.payload);
        break;
    }
  }

  function handleDispatchProduto(action: Action) {
    switch (action.type) {
      case tableActionTypes.select:
        setProdutoCorrente(action.payload);
        break;
    }
  }

  return (
    <div className="flex">
      <div className="p-2">
        <EsterilizacaoInternaMensal
          mesInicial={mesInicial}
          mesCorrente={mesCorrente}
          dispatch={handleDispatchMensal}
        >
          <EsterilizacaoInternaDiario
            mesCorrente={mesCorrente}
            diaCorrente={diaCorrente}
            dispatch={handleDispatchDiario}
          >
            <EsterilizacaoInternaProduto
              diaCorrente={diaCorrente}
              produtoCorrente={produtoCorrente}
              dispatch={handleDispatchProduto}
            >
              <EsterilizacaoInternaModelo
                diaCorrente={diaCorrente}
                produtoCorrente={produtoCorrente}
              ></EsterilizacaoInternaModelo>
            </EsterilizacaoInternaProduto>
          </EsterilizacaoInternaDiario>
        </EsterilizacaoInternaMensal>
      </div>
    </div>
  );
}
