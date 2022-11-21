import React from "react";
import { day } from "../../lib/day";
import { EsterilizacaoExternaDiario } from "./est_ext_diario";
import { EsterilizacaoExternaMensal } from "./est_ext_mensal";
import { EsterilizacaoExternaModelo } from "./est_ext_modelo";
import { EsterilizacaoExternaProduto } from "./est_ext_produto";

export function EstExt() {
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
        <EsterilizacaoExternaMensal
          mesInicial={mesInicial}
          mesCorrente={mesCorrente}
          dispatch={handleDispatchMensal}
        >
          <EsterilizacaoExternaDiario
            mesCorrente={mesCorrente}
            diaCorrente={diaCorrente}
            dispatch={handleDispatchDiario}
          >
            <EsterilizacaoExternaProduto
              diaCorrente={diaCorrente}
              produtoCorrente={produtoCorrente}
              dispatch={handleDispatchProduto}
            >
              <EsterilizacaoExternaModelo
                diaCorrente={diaCorrente}
                produtoCorrente={produtoCorrente}
              ></EsterilizacaoExternaModelo>
            </EsterilizacaoExternaProduto>
          </EsterilizacaoExternaDiario>
        </EsterilizacaoExternaMensal>
      </div>
    </div>
  );
}
