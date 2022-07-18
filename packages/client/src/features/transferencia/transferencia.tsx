import { findDuplicates } from "@vt/utils";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Badge, Button, Label, Textbox } from "../../components";
import { useFocus } from "../../lib/hooks/use-focus";
import { useStateArray } from "../../lib/hooks/use-state-array";
import { ordemProducaoService } from "../../service/ordem-producao.service";
import { transferenciaService } from "../../service/transferencia.service";

export function Transferencia() {
  const [focus, setFocus] = useFocus();

  const [qtd, setQtd] = React.useState<number>();
  const [lista, setLista] = useStateArray([]);
  const [qtdValid, setQtdValid] = React.useState<number>(0);
  const [blockQtd, setBlockQtd] = React.useState(false);
  const [blockItem, setBlockItem] = React.useState(true);
  const [item, setItem] = React.useState("");
  const [duplicates, setDuplicates] = React.useState<any[]>([]);
  const [msg, setMsg] = React.useState<string>("");

  React.useEffect(() => {
    const dup = findDuplicates(lista);
    setDuplicates(dup);
    setQtdValid(lista.length - dup.length * 2);
  }, [lista]);

  function addQtd(e: any) {
    console.log(`🚀 ~ file: transferencia.tsx ~ line 29 ~ addQtd ~ e`, e);
    if (e.value) {
      setQtd(parseInt(e.value));
      setBlockQtd(true);
      setBlockItem(false);
      setTimeout(() => setFocus(), 10);
    }
  }

  async function addList(e: any) {
    if (await ordemProducaoService.isControleValid(e.value)) {
      setItem(e.value);
      setLista.add(e.value);
      setMsg("");
      setTimeout(() => setItem(""), 10);
    }
  }

  function delList(idx: any) {
    setLista.delIndex(idx);
    setMsg("");
  }

  async function transfer() {
    // lista todas as ordens de produção entradas
    const ordens = lista.reduce((previous, current) => {
      const ord = current.substring(0, 6);
      if (!previous.includes(ord)) previous.push(ord);
      return previous;
    }, []);
    if (ordens.length !== 1) {
      setMsg("Apenas 1 ordem de produção deve ser transportada de cada vez");
      return;
    }
    try {
      await transferenciaService.create(lista);
      setQtd(undefined);
      setBlockQtd(false);
      setBlockItem(true);
      setLista.clear();
    } catch (e: any) {
      setMsg(e.message);
    }
  }

  return (
    <>
      <Label>Quantidade Física</Label>
      <Textbox
        autoFocus
        autoComplete="off"
        field="qtd"
        value={qtd}
        onChange={addQtd}
        disabled={blockQtd}
      />
      <Label>Serial</Label>
      <Textbox
        inputRef={focus}
        autoComplete="off"
        field="item"
        value={item}
        onChange={addList}
        disabled={blockItem}
      />
      <Button
        className={twMerge(
          "invisible",
          qtdValid === qtd && duplicates.length === 0 ? "visible" : ""
        )}
        dispatch={transfer}
      >
        Transferir
      </Button>
      <div
        className={twMerge(
          "text-3xl font-bold text-red-500",
          qtdValid === qtd && duplicates.length === 0 ? "text-blue-500" : ""
        )}
      >
        {qtdValid} unidades
        <div className="text-3xl font-bold text-red-500">{msg}</div>
      </div>
      <div className="flex flex-wrap">
        {lista.map((serie, idx) => (
          <Badge
            className="m-2"
            isClosable={true}
            onClose={() => delList(idx)}
            name={serie}
            key={idx + serie}
            labelClassName={duplicates.includes(serie) ? "bg-red-400" : ""}
          >
            {serie}
          </Badge>
        ))}
      </div>
    </>
  );
}
