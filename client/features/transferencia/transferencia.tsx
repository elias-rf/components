import { fetchTrpc } from "@/utils/trpc/trpc";
import { Button } from "@mantine/core";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { BadgeClose } from "../../components/badge-close";
import { Label } from "../../components/form-old";
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
      await fetchTrpc.nfEntrada.transferenciaCreate.mutate({
        controles: lista.map((item) => item.controle),
      });
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
        onChange={(e) => setOp(e.value)}
      />
      <Label name="qtd">Quantidade Física</Label>
      <Input
        autoComplete="off"
        name="quantidade"
        value={quantidade}
        onChange={(e) => setQuantidade(e.value)}
      />
      <Button onClick={readControles}>Buscar</Button>
      <Label name="serial">Serial</Label>
      <Input
        autoComplete="off"
        name="controle"
        value={controle}
        onChange={(e) => setControle(e.value)}
      />
      <Button onClick={transfer}>Transferir</Button>
      <div
        className={twMerge(
          "text-3xl font-bold text-red-500",
          readLength() === parseInt(quantidade) ? "text-blue-500" : ""
        )}
      >
        {readLength()} unidades
        <div className={"text-3xl font-bold text-red-500"}>{msg}</div>
      </div>
      <div className={"flex flex-wrap"}>
        {lista.map((item, idx) => (
          <BadgeClose
            onClose={() => unread(item.controle)}
            name={item.controle}
            key={idx + item.controle}
            className={"font-mono text-sm " + (item.lido ? "bg-red-400" : "")}
          >
            {item.controle}
          </BadgeClose>
        ))}
      </div>
    </>
  );
}
