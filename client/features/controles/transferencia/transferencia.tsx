import { TSelection } from "@/types";
import React from "react";
import { TransferenciaDiario } from "./transferencia-diario";
import { TransferenciaMensal } from "./transferencia-mensal";
import { TransferenciaModelo } from "./transferencia-modelo";

type TransferenciaProp = {
  dia?: string;
  onState?: (event: any) => void;
};

export function Transferencia({ onState, dia }: TransferenciaProp) {
  const [mesCorrente, setMesCorrente] = React.useState<{ mes: string }[]>([]);
  const [diaCorrente, setDiaCorrente] = React.useState<{ dia: string }[]>([]);

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

  React.useEffect(() => {
    onState && onState({ mesCorrente, diaCorrente });
  }, [onState, mesCorrente, diaCorrente]);

  return (
    <div className={"flex"}>
      <div className={"p-2"}>
        <TransferenciaMensal
          mesCorrente={mesCorrente}
          dia={dia}
          onSelectEvent={handleOnChangeMensal}
        >
          <TransferenciaDiario
            onSelect={handleOnChangeDiario}
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
