import React from "react";
import { twMerge } from "tailwind-merge";
import Badge from "@/features/ui/badge";
import { Textbox, Label } from "@/features/ui/form";
import useStateArray from "@/lib/hooks/use-state-array";
import Button from "@/features/ui/form/button";
import findDuplicates from "@/utils/array/find-duplicates";
import DataContext from "@/contexts/data-context";
import type { ClientContext } from "../../contexts/data-context";
import useFocus from "@/lib/hooks/use-focus";
import ordemProducaoService from "../../service/ordem-producao.service";
import notaFiscalService from "../../service/nota-fiscal.service";

function Transferencia() {
  const { clientKnex } = React.useContext(DataContext) as ClientContext;
  const ordemProducaoSvc = ordemProducaoService(clientKnex);
  const notaFiscalSvc = notaFiscalService(clientKnex);

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
    if (e.value) {
      setQtd(parseInt(e.value));
      setBlockQtd(true);
      setBlockItem(false);
      setTimeout(() => setFocus(), 10);
    }
  }

  function addList(e: any) {
    if (ordemProducaoSvc.isSerieValida(e.value)) {
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

    const kOp = ordens[0] + "00";
    const jaCadastrado = await notaFiscalSvc.includes(kOp, "1");
    if (jaCadastrado) {
      setMsg("Ordem de produção já cadastrada");
      return;
    }

    const prod = await ordemProducaoSvc.getProdutoPlano(kOp);
    const fab = await ordemProducaoSvc.getDataFabricacao(kOp);
    const exp = await ordemProducaoSvc.getDataValidade(kOp);
    await notaFiscalSvc.transferir(
      kOp,
      prod,
      fab.format("YYYY-MM-DD"),
      exp.format("YYYY-MM-DD"),
      lista
    );
    setQtd(undefined);
    setBlockQtd(false);
    setBlockItem(true);
    setLista.clear();
  }

  return (
    <>
      <Label>Quantidade Física</Label>
      <Textbox
        autoFocus
        autoComplete="off"
        field="qtd"
        value={qtd}
        dispatch={addQtd}
        disabled={blockQtd}
      />
      <Label>Serial</Label>
      <Textbox
        inputRef={focus}
        autoComplete="off"
        field="item"
        value={item}
        dispatch={addList}
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

export default Transferencia;
