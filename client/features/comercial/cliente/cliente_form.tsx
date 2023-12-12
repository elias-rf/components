import { FormField } from '@/client/components/ui/form-field/form-field.js'
import { Input } from '@/client/components/ui/input/input.js'
import { Label } from '@/client/components/ui/label.js'
import { Tabs } from '@/client/components/ui/tabs/tabs.js'
import type { TClienteStore } from '@/client/features/comercial/cliente/cliente_store.js'
import { ClienteQuantidade } from '@/client/features/comercial/cliente/components/cliente-quantidade.js'
import { ClienteValorMedio } from '@/client/features/comercial/cliente/components/cliente-valor-medio.js'
import { ClienteValor } from '@/client/features/comercial/cliente/components/cliente-valor.js'
import { useForm } from '@/client/lib/hooks/use-form.js'
import type { TAuthStore } from '@/client/store/auth_store.js'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

export function ClienteForm({
  store,
  auth,
}: {
  store: TClienteStore
  auth: TAuthStore
}) {
  const status = store.use.status()
  const recordClear = store.use.recordClear()
  const fetchRecord = store.use.fetchRecord()
  const selection = store.use.selection()
  const record = store.use.record()

  const [tab, setTab] = useState('')
  const form = useForm({ value: recordClear })

  useEffect(() => {
    form.reset(record)
  }, [record])

  useEffect(() => {
    toast.promise(
      fetchRecord(),
      {
        loading: 'Carregando cliente...',
        success: 'Cliente carregado com sucesso!',
        error: 'Erro ao carregar cliente!',
      },
      {
        id: 'cliente-form',
        style: {
          minWidth: '350px',
        },
      }
    )
  }, [selection])

  return (
    <>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 sm:col-span-2 lg:col-span-1">
          <FormField>
            <Label id="CdCliente">Cód.</Label>
            <Input
              disabled={['none', 'edit', 'new'].includes(status)}
              id="CdCliente"
              name="CdCliente"
              onInput={form.handleChange}
              value={form.value.CdCliente}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-10 lg:col-span-6">
          <FormField>
            <Label id="RzSocial">Nome</Label>
            <Input
              id="RzSocial"
              name="RzSocial"
              disabled={['none', 'edit', 'new'].includes(status)}
              value={form.value.RzSocial}
              onInput={form.handleChange}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <FormField>
            <Label id="Cidade">Cidade</Label>
            <Input
              id="Cidade"
              name="Cidade"
              disabled={['none', 'edit', 'new'].includes(status)}
              value={form.value.Cidade}
              onInput={form.handleChange}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-2 lg:col-span-1">
          <FormField>
            <Label id="Uf">UF</Label>
            <Input
              id="Uf"
              name="Uf"
              disabled={['none', 'edit', 'new'].includes(status)}
              value={form.value.Uf}
              onInput={form.handleChange}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-4 lg:col-span-2">
          <FormField>
            <Label id="CGC">CNPJ</Label>
            <Input
              id="CGC"
              name="CGC"
              disabled={['none', 'edit', 'new'].includes(status)}
              value={form.value.CGC}
              onInput={form.handleChange}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-2 lg:col-span-1">
          <FormField>
            <Label id="CdVendedor">Vend</Label>
            <Input
              id="CdVendedor"
              name="CdVendedor"
              disabled={['none', 'edit', 'new'].includes(status)}
              value={form.value.CdVendedor}
              onInput={form.handleChange}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-2 lg:col-span-1">
          <FormField>
            <Label id="FgAtivo">Ativo</Label>
            <Input
              id="FgAtivo"
              name="FgAtivo"
              disabled={['none', 'edit', 'new'].includes(status)}
              value={form.value.FgAtivo}
              onInput={form.handleChange}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-8 lg:col-span-4">
          <FormField>
            <Label id="EMail">EMail</Label>
            <Input
              id="EMail"
              name="EMail"
              disabled={['none', 'edit', 'new'].includes(status)}
              value={form.value.EMail}
              onInput={form.handleChange}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <FormField>
            <Label id="NumIdentidade">Identidade</Label>
            <Input
              id="NumIdentidade"
              name="NumIdentidade"
              disabled={['none', 'edit', 'new'].includes(status)}
              value={form.value.NumIdentidade}
              onInput={form.handleChange}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <FormField>
            <Label id="DtCadastro">Data Cadastro</Label>
            <Input
              id="DtCadastro"
              name="DtCadastro"
              disabled={['none', 'edit', 'new'].includes(status)}
              value={form.value.DtCadastro}
              onInput={form.handleChange}
            />
          </FormField>
        </div>
        <div className="col-span-12">
          <Tabs
            selected={tab}
            onChange={setTab}
          >
            <Tabs.Tab
              label="Valor"
              name="valor"
            >
              <ClienteValor />
            </Tabs.Tab>
            <Tabs.Tab
              label="Quantidade"
              name="quantidade"
            >
              <ClienteQuantidade />
            </Tabs.Tab>
            <Tabs.Tab
              label="Valor Médio"
              name="valor-medio"
            >
              <ClienteValorMedio />
            </Tabs.Tab>
          </Tabs>
        </div>
      </div>
    </>
  )
}
