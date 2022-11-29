import React from "react";
import { TEvent } from "../../../../types";
import { day } from "../../../lib/day";
import { EsterilizacaoExternaDiario } from "./est_ext_diario";
import { EsterilizacaoExternaMensal } from "./est_ext_mensal";
import { EsterilizacaoExternaModelo } from "./est_ext_modelo";
import { EsterilizacaoExternaProduto } from "./est_ext_produto";

export function EstExt() {
  const [mesCorrente, setMesCorrente] = React.useState({});
  const [diaCorrente, setDiaCorrente] = React.useState({});
  const [produtoCorrente, setProdutoCorrente] = React.useState({});

  const mesInicial = { mes: day().subtract(13, "month").format("YYYY-MM") };

  function handleOnChangeEvent(event: TEvent) {
    if (event.name === "mensal") setMesCorrente(event.value);
    if (event.name === "diario") setDiaCorrente(event.value);
    if (event.name === "produto") setProdutoCorrente(event.value);
  }

  return (
    <div className="flex">
      <div className="p-2">
        <EsterilizacaoExternaMensal
          mesInicial={mesInicial}
          mesCorrente={mesCorrente}
          onSelectEvent={handleOnChangeEvent}
        >
          <EsterilizacaoExternaDiario
            mesCorrente={mesCorrente}
            diaCorrente={diaCorrente}
            onSelectEvent={handleOnChangeEvent}
          >
            <EsterilizacaoExternaProduto
              diaCorrente={diaCorrente}
              produtoCorrente={produtoCorrente}
              onSelectEvent={handleOnChangeEvent}
            >
              <EsterilizacaoExternaModelo
                diaCorrente={diaCorrente}
                produtoCorrente={produtoCorrente}
                onSelectEvent={handleOnChangeEvent}
              ></EsterilizacaoExternaModelo>
            </EsterilizacaoExternaProduto>
          </EsterilizacaoExternaDiario>
        </EsterilizacaoExternaMensal>
      </div>
    </div>
  );
}
