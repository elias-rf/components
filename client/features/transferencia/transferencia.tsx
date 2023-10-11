import { Input } from '@/client/components/ui/input'
import { Title } from '@/client/components/ui/title'
import { cn } from '@/client/lib/cn'
import { useArray } from '@/client/lib/hooks/use-array'
import { rpc } from '@/rpc/rpc-client'
import { Button } from 'flowbite-react'
import React from 'react'

// 000001000017 , 000001000025, 000001000033

export function Transferencia() {
  const [quantidade, setQuantidade] = React.useState('')
  const [serial, setSerial] = React.useState('')
  const [lista, setLista] = useArray<string>([])
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
    if (await rpc.ordemProducao.ehControleValido({ controle: value })) {
      if (!lista.includes(value)) setLista.push(value)
      setMsg('')
    } else {
      setMsg('Controle inválido: ' + value)
    }
    setSerial('')
  }

  function delList(idx: any) {
    setLista.removeAt(idx)
    setMsg('')
  }

  async function transfer() {
    try {
      await rpc.nfEntrada.transferenciaCreate({ controles: lista })
      setQuantidade('')
      setLista.empty()
    } catch (e: any) {
      setMsg(e.message)
    }
  }

  return (
    <>
      <Title>Transferência</Title>
      <div className="flex flex-row space-x-2 justifyContent-start alignItems-center">
        <div>
          <Input
            value={quantidade}
            label="Quantidade Física"
            onInput={handleQuantidade}
            disabled={parseInt(quantidade) > 0}
          />
        </div>
      </div>
      <div className="flex flex-row space-x-2 justifyContent-start alignItems-center">
        <div>
          <Input
            value={serial}
            label="Serial"
            onInput={addList}
            ref={quantidadeRef}
          />
        </div>
        <div>
          <Button
            onClick={transfer}
            disabled={lista.length !== parseInt(quantidade)}
          >
            Transferir
          </Button>
        </div>
      </div>
      <div
        className={cn(
          'text-3xl font-bold ',
          lista.length == parseInt(quantidade)
            ? 'text-blue-500'
            : 'text-red-500'
        )}
      >
        {lista.length} unidades
        <div className={'text-3xl font-bold text-red-500'}>{msg}</div>
      </div>
      <div className={'flex flex-wrap space-x-2'}>
        {lista.map((serie, idx) => (
          <React.Fragment key={idx + serie}>
            <Button
              pill
              size="xs"
              color="gray"
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
