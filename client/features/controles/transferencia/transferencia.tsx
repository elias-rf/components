import React from "react";
import { TransferenciaDiario } from "./transferencia_diario";
import { TransferenciaMensal } from "./transferencia_mensal";
import { TransferenciaModelo } from "./transferencia_modelo";

type TransferenciaProp = {
  dia?: string;
};

export function Transferencia({ dia }: TransferenciaProp) {
  const [mesCorrente, setMesCorrente] = React.useState({});
  const [diaCorrente, setDiaCorrente] = React.useState({});

  function handleOnChangeEvent(event: any) {
    if (event.name === "mensal") setMesCorrente(event.value);
    if (event.name === "diario") setDiaCorrente(event.value);
  }

  return (
    <div className={"flex"}>
      <div className={"p-2"}>
        <TransferenciaMensal
          mesCorrente={mesCorrente}
          dia={dia}
          onSelectEvent={handleOnChangeEvent}
        >
          <TransferenciaDiario
            onSelectEvent={handleOnChangeEvent}
            diaCorrente={diaCorrente}
            mesCorrente={mesCorrente}
          >
            <TransferenciaModelo diaCorrente={diaCorrente} />
          </TransferenciaDiario>
        </TransferenciaMensal>
      </div>
      <div className={"p-2"}></div>
    </div>
  );
}