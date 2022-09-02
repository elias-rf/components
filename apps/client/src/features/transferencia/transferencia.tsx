import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Badge } from "../../components/badge";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Label } from "../../components/label";
import { useField } from "../../lib/hooks/use-field.hook";
import { ordemProducaoService } from "../../service/ordem-producao.service";
import { transferenciaService } from "../../service/transferencia.service";

type TLista = {
  controle: string;
  lido: boolean;
  transferido: boolean;
};

export function Transferencia() {
  const fieldOp = useField(""); // 18818400  188184000029
  const fieldControle = useField("");
  const fieldQuantidade = useField("");
  const [lista, setLista] = useState<TLista[]>([]);
  const [msg, setMsg] = React.useState<string>("");

  React.useEffect(() => {
    if (fieldControle.value.length === 12) {
      const setado = read(fieldControle.value);
      if (setado) {
        setMsg("");
      } else {
        setMsg(fieldControle.value + " não encontrado");
      }
      fieldControle.reset();
    }
  }, [fieldControle]);

  async function readControles() {
    const rsp = await ordemProducaoService.listEtiquetas([fieldOp.value]);
    const resp = rsp.map((item) => ({
      controle: item.controle || "",
      lido: false,
      transferido: false,
    }));
    setLista(resp);
  }

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
    if (readLength() !== parseInt(fieldQuantidade.value)) {
      setMsg("Quantidade lida está incorreta");
      return;
    }
    try {
      await transferenciaService.create(lista.map((item) => item.controle));
    } catch (e: any) {
      setMsg(e.message);
    }
  }

  return (
    <>
      <Label>Ordem Produção</Label>
      <Input
        autoComplete="off"
        field="op"
        {...fieldOp.register()}
      />
      <Label>Quantidade Física</Label>
      <Input
        autoComplete="off"
        {...fieldQuantidade.register()}
      />
      <Button onClick={readControles}>Buscar</Button>
      <Label>Serial</Label>
      <Input
        autoComplete="off"
        {...fieldControle.register()}
      />
      <Button dispatch={transfer}>Transferir</Button>
      <div
        className={twMerge(
          "text-3xl font-bold text-red-500",
          readLength() === parseInt(fieldQuantidade.value)
            ? "text-blue-500"
            : ""
        )}
      >
        {readLength()} unidades
        <div className="text-3xl font-bold text-red-500">{msg}</div>
      </div>
      <div className="flex flex-wrap">
        {lista.map((item, idx) => (
          <Badge
            className="m-2"
            isClosable={true}
            onClose={() => unread(item.controle)}
            name={item.controle}
            key={idx + item.controle}
            labelClassName={
              "font-mono text-sm " + (item.lido ? "bg-red-400" : "")
            }
          >
            {item.controle}
          </Badge>
        ))}
      </div>
    </>
  );
}
