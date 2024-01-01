import { FormField } from '@/client/components/ui-old/form-field/form-field.js'
import { InputForm } from '@/client/components/ui-old/input/input-form.js'
import { Label } from '@/client/components/ui-old/label.js'
import { Tabs } from '@/client/components/ui-old/tabs/tabs.js'
import type { TClienteStore } from '@/client/pages/comercial/clientes/cliente_store.js'
import { ClienteQuantidade } from '@/client/pages/comercial/clientes/components/cliente-quantidade.js'
import { ClienteValorMedio } from '@/client/pages/comercial/clientes/components/cliente-valor-medio.js'
import { ClienteValor } from '@/client/pages/comercial/clientes/components/cliente-valor.js'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

export function ClienteForm({ store }: { store: TClienteStore }) {
  const status = store.use.status()
  const recordClear = store.use.recordClear()
  const fetchRecord = store.use.fetchRecord()
  const selection = store.use.selection()
  const record = store.use.record()

  const [tab, setTab] = useState('')
  const form = useForm({ defaultValues: recordClear })

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
        <FormField className="col-span-2 sm:col-span-2 lg:col-span-1">
          <Label name="CdCliente">Cód.</Label>
          <InputForm
            disabled={['none', 'edit', 'new'].includes(status)}
            {...form.register('CdCliente')}
          />
        </FormField>
        <FormField className="col-span-10 sm:col-span-10 lg:col-span-6">
          <Label name="RzSocial">Nome</Label>
          <InputForm
            disabled={['none', 'edit', 'new'].includes(status)}
            {...form.register('RzSocial')}
          />
        </FormField>
        <FormField className="col-span-10 sm:col-span-6 lg:col-span-4">
          <Label name="Cidade">Cidade</Label>
          <InputForm
            disabled={['none', 'edit', 'new'].includes(status)}
            {...form.register('Cidade')}
          />
        </FormField>
        <FormField className="col-span-2 sm:col-span-2 lg:col-span-1">
          <Label name="Uf">UF</Label>
          <InputForm
            disabled={['none', 'edit', 'new'].includes(status)}
            {...form.register('Uf')}
          />
        </FormField>
        <FormField className="col-span-8 sm:col-span-4 lg:col-span-2">
          <Label name="CGC">CNPJ</Label>
          <InputForm
            disabled={['none', 'edit', 'new'].includes(status)}
            {...form.register('CGC')}
          />
        </FormField>
        <FormField className="col-span-2 sm:col-span-2 lg:col-span-1">
          <Label name="CdVendedor">Vend</Label>
          <InputForm
            disabled={['none', 'edit', 'new'].includes(status)}
            {...form.register('CdVendedor')}
          />
        </FormField>
        <FormField className="col-span-2 sm:col-span-2 lg:col-span-1">
          <Label name="FgAtivo">Ativo</Label>
          <InputForm
            disabled={['none', 'edit', 'new'].includes(status)}
            {...form.register('FgAtivo')}
          />
        </FormField>
        <FormField className="col-span-12 sm:col-span-8 lg:col-span-4">
          <Label name="EMail">EMail</Label>
          <InputForm
            disabled={['none', 'edit', 'new'].includes(status)}
            {...form.register('EMail')}
          />
        </FormField>
        <FormField className="col-span-6 sm:col-span-6 lg:col-span-4">
          <Label name="NumIdentidade">Identidade</Label>
          <InputForm
            disabled={['none', 'edit', 'new'].includes(status)}
            {...form.register('NumIdentidade')}
          />
        </FormField>
        <FormField className="col-span-6 sm:col-span-6 lg:col-span-4">
          <Label name="DtCadastro">Data Cadastro</Label>
          <InputForm
            disabled={['none', 'edit', 'new'].includes(status)}
            {...form.register('DtCadastro')}
          />
        </FormField>
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
