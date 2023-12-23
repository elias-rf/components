import { Button } from '@/client/components/ui/button/button.js'
import { Input } from '@/client/components/ui/input/input.js'
import { Label } from '@/client/components/ui/label.js'
import { Title } from '@/client/components/ui/title.js'
import { cn } from '@/client/lib/cn.js'
import { useStateArray } from '@/client/lib/hooks/use-state-array.js'
import { rpc } from '@/client/lib/rpc.js'
import React from 'react'

// 000001000017 , 000001000025, 000001000033

export function Transferencia() {
  const [quantidade, setQuantidade] = React.useState('')
  const [serial, setSerial] = React.useState('')
  const lista = useStateArray<string>([])
  const [msg, setMsg] = React.useState<string>('')
  const quantidadeRef = React.useRef<HTMLInputElement>(null)

  function handleQuantidade(value: string) {
    if (isNaN(parseInt(value))) return
    setQuantidade(value)
    quantidadeRef.current && quantidadeRef.current.focus()
  }

  async function addList(value: string) {
    setSerial(value)
    if (value.length == 0 || quantidade.length == 0) return
    if (
      await rpc.request('ordemProducao_ehControleValido', { controle: value })
    ) {
      if (!lista.includes(value)) lista.push(value)
      setMsg('')
    } else {
      setMsg('Controle inválido: ' + value)
    }
    setSerial('')
  }

  function delList(idx: any) {
    lista.removeAt(idx)
    setMsg('')
  }

  async function transfer() {
    try {
      await rpc.request('nfEntrada_transferenciaCreate', {
        controles: lista.value,
      })
      setQuantidade('')
      lista.empty()
    } catch (e: any) {
      setMsg(e.message)
    }
  }

  return (
    <>
      <div className="justifyContent-start alignItems-center flex flex-row space-x-2">
        <div>
          <Label name="quantidade">Quantidade Física</Label>
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
          <Label name="serial">Serial</Label>
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
            [T]ransferir
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
            <Button
              size="xs"
              outline
              onClick={() => delList(idx)}
            >
              {serie}
            </Button>
          </React.Fragment>
        ))}
      </div>
    </>
  )
}
