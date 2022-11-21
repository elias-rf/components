import React from "react";
import { day } from "../../lib/day";
import { EsterilizacaoInternaDiario } from "./est_int_diario";
import { EsterilizacaoInternaMensal } from "./est_int_mensal";
import { EsterilizacaoInternaModelo } from "./est_int_modelo";
import { EsterilizacaoInternaProduto } from "./est_int_produto";

export function EstInt() {
  const [mesCorrente, setMesCorrente] = React.useState([]);
  const [diaCorrente, setDiaCorrente] = React.useState([]);
  const [produtoCorrente, setProdutoCorrente] = React.useState([]);

  const mesInicial = day().subtract(13, "month").format("YYYY-MM");

  function handleDispatchMensal(action: any) {
    // switch (action.type) {
    //   case tableActionTypes.select:
    //     setMesCorrente(action.payload);
    //     break;
    // }
  }
  function handleDispatchDiario(action: any) {
    // switch (action.type) {
    //   case tableActionTypes.select:
    //     setDiaCorrente(action.payload);
    //     break;
    // }
  }

  function handleDispatchProduto(action: any) {
    // switch (action.type) {
    //   case tableActionTypes.select:
    //     setProdutoCorrente(action.payload);
    //     break;
    // }
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
