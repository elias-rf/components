import React from "react";
import { day } from "../../../../utils/date/day";
import { EsterilizacaoExternaDiario } from "./est-ext-diario";
import { EsterilizacaoExternaMensal } from "./est-ext-mensal";
import { EsterilizacaoExternaModelo } from "./est-ext-modelo";
import { EsterilizacaoExternaProduto } from "./est-ext-produto";

type EsterilizacaoExternaProp = {
  dia?: string;
};

export function EstExt({ dia }: EsterilizacaoExternaProp) {
  const [mesCorrente, setMesCorrente] = React.useState({});
  const [diaCorrente, setDiaCorrente] = React.useState({});
  const [produtoCorrente, setProdutoCorrente] = React.useState({});

  const mesInicial = { mes: day(dia).subtract(13, "month").format("YYYY-MM") };

  function handleOnChange(event: any) {
    if (event.name === "mensal") setMesCorrente(event.value);
    if (event.name === "diario") setDiaCorrente(event.value);
    if (event.name === "produto") setProdutoCorrente(event.value);
  }

  return (
    <div className={"flex"}>
      <div className={"p-2"}>
        <EsterilizacaoExternaMensal
          mesInicial={mesInicial}
          mesCorrente={mesCorrente}
          onSelect={handleOnChange}
        >
          <EsterilizacaoExternaDiario
            mesCorrente={mesCorrente}
            diaCorrente={diaCorrente}
            onSelect={handleOnChange}
          >
            <EsterilizacaoExternaProduto
              diaCorrente={diaCorrente}
              produtoCorrente={produtoCorrente}
              onSelect={handleOnChange}
            >
              <EsterilizacaoExternaModelo
                diaCorrente={diaCorrente}
                produtoCorrente={produtoCorrente}
                onSelect={handleOnChange}
              ></EsterilizacaoExternaModelo>
            </EsterilizacaoExternaProduto>
          </EsterilizacaoExternaDiario>
        </EsterilizacaoExternaMensal>
      </div>
    </div>
  );
}
