import {
  Button,
  Chip,
  Grid,
  TextField,
  Typography,
} from "@/client/components/ui";
import { useArray } from "@/client/lib/hooks/use-array";
import { useInput } from "@/client/lib/hooks/use-input";
import { trpc } from "@/utils/trpc/trpc";
import React from "react";

// 000001000017 , 000001000025, 000001000033

export function Transferencia() {
  const [quantidade, setQuantidade] = React.useState("");
  const [lista, setLista] = useArray<string>([]);
  const [msg, setMsg] = React.useState<string>("");
  const inputQuantidade = useInput(handleQuantidade);
  const inputSerial = useInput(addList);
  const utils = trpc.useContext();
  // const quantidadeRef = React.useRef();
  const createTransferencia = trpc.nfEntrada.transferenciaCreate.useMutation({
    onSuccess: () => {
      setQuantidade("");
      setLista.empty();
    },
    onError: (error) => {
      setMsg(error.message);
    },
  });

  function handleQuantidade(value: string) {
    setQuantidade(value);
    // quantidadeRef.current && quantidadeRef.current.focus();
  }

  async function addList(value: string) {
    if (await utils.ordemProducao.ehControleValido.fetch({ controle: value })) {
      if (!lista.includes(value)) setLista.push(value);
      setMsg("");
    } else {
      setMsg("Controle inválido: " + value);
    }
    inputSerial.setValue("");
  }

  function delList(idx: any) {
    setLista.removeAt(idx);
    setMsg("");
  }

  async function transfer() {
    createTransferencia.mutate({
      controles: lista,
    });
  }

  return (
    <>
      <Typography variant="h5">Transferência</Typography>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid>
          <TextField
            label="Quantidade Física"
            autoComplete="off"
            size="small"
            {...inputQuantidade.props}
            disabled={parseInt(quantidade) > 0}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid>
          <TextField
            label="Serial"
            autoComplete="off"
            size="small"
            {...inputSerial.props}
            disabled={isNaN(parseInt(quantidade))}
          />
        </Grid>
        <Grid>
          <Button
            variant="contained"
            onClick={transfer}
            disabled={lista.length !== parseInt(quantidade)}
          >
            Transferir
          </Button>
        </Grid>
      </Grid>
      <Typography
        variant="h5"
        className={
          "text-3xl font-bold " +
          (lista.length == parseInt(quantidade)
            ? "text-blue-500"
            : "text-red-500")
        }
      >
        {lista.length} unidades
        <div className={"text-3xl font-bold text-red-500"}>{msg}</div>
      </Typography>
      <div className={"flex flex-wrap"}>
        {lista.map((serie, idx) => (
          <Chip
            key={idx + serie}
            label={serie}
            onDelete={() => delList(idx)}
          />
        ))}
      </div>
    </>
  );
}
