import React from "react";
import { TEvent } from "../../../../types";
import { day } from "../../../../utils/date/day";
import { EsterilizacaoInternaDiario } from "./est_int_diario";
import { EsterilizacaoInternaMensal } from "./est_int_mensal";
import { EsterilizacaoInternaModelo } from "./est_int_modelo";
import { EsterilizacaoInternaProduto } from "./est_int_produto";

type EsterilizacaoInternaProp = {
  dia?: string;
};

export function EstInt({ dia }: EsterilizacaoInternaProp) {
  const [mesCorrente, setMesCorrente] = React.useState({});
  const [diaCorrente, setDiaCorrente] = React.useState({});
  const [produtoCorrente, setProdutoCorrente] = React.useState({});

  const mesInicial = { mes: day(dia).subtract(13, "month").format("YYYY-MM") };

  function handleOnChangeEvent(event: TEvent) {
    if (event.name === "mensal") setMesCorrente(event.value);
    if (event.name === "diario") setDiaCorrente(event.value);
    if (event.name === "produto") setProdutoCorrente(event.value);
  }

  return (
    <div className={"flex"}>
      <div className={"p-2"}>
        <EsterilizacaoInternaMensal
          mesInicial={mesInicial}
          mesCorrente={mesCorrente}
          onSelectEvent={handleOnChangeEvent}
        >
          <EsterilizacaoInternaDiario
            mesCorrente={mesCorrente}
            diaCorrente={diaCorrente}
            onSelectEvent={handleOnChangeEvent}
          >
            <EsterilizacaoInternaProduto
              diaCorrente={diaCorrente}
              produtoCorrente={produtoCorrente}
              onSelectEvent={handleOnChangeEvent}
            >
              <EsterilizacaoInternaModelo
                diaCorrente={diaCorrente}
                produtoCorrente={produtoCorrente}
                onSelectEvent={handleOnChangeEvent}
              ></EsterilizacaoInternaModelo>
            </EsterilizacaoInternaProduto>
          </EsterilizacaoInternaDiario>
        </EsterilizacaoInternaMensal>
      </div>
    </div>
  );
}
