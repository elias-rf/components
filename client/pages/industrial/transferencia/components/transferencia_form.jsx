import React from 'react'
import { Button } from '../../../../components_/button/button.jsx'
import { Label } from '../../../../components_/label/label.jsx'
import { Input } from '../../../../components_/ui-old/input/input.jsx'
import { useMessageBox } from '../../../../lib/hooks/use-message-box.jsx'
import { useStateArray } from '../../../../lib/hooks/use-state-array.mjs'
import { rpc } from '../../../../lib/rpc.mjs'
import { cn } from '../../../../lib/utils.mjs'

// 000001000017 , 000001000025, 000001000033

export function TransferenciaForm() {
  const [quantidade, setQuantidade] = React.useState('')
  const [serial, setSerial] = React.useState('')
  const lista = useStateArray([])
  const [msg, setMsg] = React.useState('')
  const quantidadeRef = React.useRef(null)

  const { MsgBox, confirm } = useMessageBox({
    title: 'Transferência',
    message: 'Transferência para filial concluida',
    option1: 'Ok',
  })

  function handleQuantidade(value) {
    if (isNaN(parseInt(value))) return
    setQuantidade(value)
    quantidadeRef.current && quantidadeRef.current.focus()
  }

  async function addList(value) {
    setSerial(value)
    if (value.length == 0 || quantidade.length == 0) return
    const isValid = await rpc.request('ordemProducao_ehControleValido', {
      controle: value,
    })

    if (isValid) {
      if (!lista.includes(value)) lista.push(value)
      setMsg('')
    } else {
      setMsg('Controle inválido: ' + value)
    }
    setSerial('')
  }

  function delList(idx) {
    lista.removeAt(idx)
    setMsg('')
  }

  async function transfer() {
    try {
      const response = await rpc.request('nfEntrada_createTransferencia', {
        controles: lista.value,
      })
      if (response) {
        setQuantidade('')
        lista.empty()
        await confirm()
      }
    } catch (e) {
      setMsg(e.message)
    }
  }

  return (
    <>
      <div className="justifyContent-start alignItems-center flex flex-row space-x-2">
        <div>
          <Label htmlFor="quantidade">Quantidade Física</Label>
          <Input
            id="quantidade"
            name="quantidade"
            value={quantidade}
            onInput={handleQuantidade}
            disabled={parseInt(quantidade) > 0}
          />
        </div>
      </div>
      <div className="justifyContent-start alignItems-center flex flex-row space-x-2">
        <div>
          <Label htmlFor="serial">Serial</Label>
          <Input
            value={serial}
            onInput={addList}
            ref={quantidadeRef}
          />
        </div>
        <div>
          <Button
            onClick={transfer}
            disabled={lista.value.length !== parseInt(quantidade)}
          >
            Transferir
          </Button>
        </div>
      </div>
      <div
        className={cn(
          'text-3xl font-bold ',
          lista.value.length == parseInt(quantidade)
            ? 'text-blue-500'
            : 'text-red-500'
        )}
      >
        {lista.value.length} unidades
        <div className={'text-3xl font-bold text-red-500'}>{msg}</div>
      </div>
      <div className={'flex flex-wrap space-x-2'}>
        {lista.value.map((serie, idx) => (
          <React.Fragment key={idx + serie}>
            <Button onClick={() => delList(idx)}>{serie}</Button>
          </React.Fragment>
        ))}
      </div>
      <MsgBox />
    </>
  )
}
