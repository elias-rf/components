import React, { useState } from "react";
import { nfSaidaService } from "../../../model/nf-saida/nf-saida.service";
import { ordemProducaoService } from "../../../model/ordem-producao/ordem-producao.service";
import { Badge } from "../../components/badge";
import { Button } from "../../components/button";
import { Label } from "../../components/form";
import { Input } from "../../components/input";

type TLista = {
  controle: string;
  lido: boolean;
  transferido: boolean;
};

export function Transferencia() {
  const [op, setOp] = React.useState(""); // 18818400  188184000029
  const [controle, setControle] = React.useState("");
  const [quantidade, setQuantidade] = React.useState("");
  const [lista, setLista] = useState<TLista[]>([]);
  const [msg, setMsg] = React.useState<string>("");

  function read(controle: string) {
    let flag = false;
    const lst = lista.map((item) => {
      if (item.controle === controle) {
        item.lido = true;
        flag = true;
      }
      return item;
    });
    setLista(lst);
    return flag;
  }

  React.useEffect(() => {
    if (controle.length === 12) {
      const setado = read(controle);
      if (setado) {
        setMsg("");
      } else {
        setMsg(controle + " não encontrado");
      }
      setControle("");
    }
  }, [controle]);

  async function readControles() {
    const rsp = await ordemProducaoService.listEtiquetas([op]);
    const resp = rsp.map((item: any) => ({
      controle: item.controle || "",
      lido: false,
      transferido: false,
    }));
    setLista(resp);
  }

  function readLength() {
    return lista.filter((item) => item.lido).length;
  }

  function unread(controle: string) {
    const lst = lista.map((item) => {
      if (item.controle === controle) {
        item.lido = false;
      }
      return item;
    });
    setLista(lst);
  }

  async function transfer() {
    if (readLength() !== parseInt(quantidade)) {
      setMsg("Quantidade lida está incorreta");
      return;
    }
    try {
      await nfSaidaService.create(lista.map((item) => item.controle));
    } catch (e: any) {
      setMsg(e.message);
    }
  }

  return (
    <>
      <Label name="op">Ordem Produção</Label>
      <Input
        autoComplete="off"
        name="op"
        value={op}
        onChangeEvent={(e) => setOp(e.value)}
      />
      <Label name="qtd">Quantidade Física</Label>
      <Input
        autoComplete="off"
        name="quantidade"
        value={quantidade}
        onChangeEvent={(e) => setQuantidade(e.value)}
      />
      <Button onClickEvent={readControles}>Buscar</Button>
      <Label name="serial">Serial</Label>
      <Input
        autoComplete="off"
        name="controle"
        value={controle}
        onChangeEvent={(e) => setControle(e.value)}
      />
      <Button onClickEvent={transfer}>Transferir</Button>
      <div
        className={
          ("text-3xl font-bold text-red-500",
          readLength() === parseInt(quantidade) ? "text-blue-500" : "")
        }
      >
        {readLength()} unidades
        <div className={"text-3xl font-bold text-red-500"}>{msg}</div>
      </div>
      <div className={"flex flex-wrap"}>
        {lista.map((item, idx) => (
          <Badge
            onCloseEvent={() => unread(item.controle)}
            name={item.controle}
            key={idx + item.controle}
            className={"font-mono text-sm " + (item.lido ? "bg-red-400" : "")}
          >
            {item.controle}
          </Badge>
        ))}
      </div>
    </>
  );
}
