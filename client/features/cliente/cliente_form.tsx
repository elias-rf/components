import { Input } from '@/client/components/ui/input/input'
import { Tabs } from '@/client/components/ui/tabs/tabs'
import { clienteStore } from '@/client/features/cliente/cliente_store'
import { ClienteQuantidade } from '@/client/features/cliente/components/cliente-quantidade'
import { ClienteValor } from '@/client/features/cliente/components/cliente-valor'
import { ClienteValorMedio } from '@/client/features/cliente/components/cliente-valor-medio'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export function ClienteForm() {
  const status = clienteStore.use.status()
  const recordClear = clienteStore.use.recordClear()
  const fetchRecord = clienteStore.use.fetchRecord()
  const selection = clienteStore.use.selection()
  const record = clienteStore.use.record()

  const [tab, setTab] = useState('')
  const form = useForm({ defaultValues: recordClear, mode: 'onTouched' })

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
          <Controller
            name="CdCliente"
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                disabled={['none', 'edit', 'new'].includes(status)}
                helper={fieldState.error?.message}
                label="Cód."
                onBlur={field.onBlur}
                onChange={field.onChange}
                value={field.value}
                variant={fieldState.error && 'error'}
              />
            )}
          />
        </div>
        <div className="col-span-12 sm:col-span-10 lg:col-span-6">
          <Controller
            name="RzSocial"
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                label="Nome"
                disabled={['none', 'edit', 'new'].includes(status)}
                variant={fieldState.error && 'error'}
                helper={fieldState.error?.message}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <Controller
            name="Cidade"
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                label="Cidade"
                disabled={['none', 'edit', 'new'].includes(status)}
                variant={fieldState.error && 'error'}
                helper={fieldState.error?.message}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
        </div>
        <div className="col-span-12 sm:col-span-2 lg:col-span-1">
          <Controller
            name="Uf"
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                label="UF"
                disabled={['none', 'edit', 'new'].includes(status)}
                variant={fieldState.error && 'error'}
                helper={fieldState.error?.message}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
        </div>
        <div className="col-span-12 sm:col-span-4 lg:col-span-2">
          <Controller
            name="CGC"
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                label="CNPJ"
                disabled={['none', 'edit', 'new'].includes(status)}
                variant={fieldState.error && 'error'}
                helper={fieldState.error?.message}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
        </div>
        <div className="col-span-12 sm:col-span-2 lg:col-span-1">
          <Controller
            name="CdVendedor"
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                label="Vend"
                disabled={['none', 'edit', 'new'].includes(status)}
                variant={fieldState.error && 'error'}
                helper={fieldState.error?.message}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
        </div>
        <div className="col-span-12 sm:col-span-2 lg:col-span-1">
          <Controller
            name="FgAtivo"
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                label="Ativo"
                disabled={['none', 'edit', 'new'].includes(status)}
                variant={fieldState.error && 'error'}
                helper={fieldState.error?.message}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
        </div>
        <div className="col-span-12 sm:col-span-8 lg:col-span-4">
          <Controller
            name="EMail"
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                label="EMail"
                disabled={['none', 'edit', 'new'].includes(status)}
                variant={fieldState.error && 'error'}
                helper={fieldState.error?.message}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <Controller
            name="NumIdentidade"
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                label="Identidade"
                disabled={['none', 'edit', 'new'].includes(status)}
                variant={fieldState.error && 'error'}
                helper={fieldState.error?.message}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <Controller
            name="DtCadastro"
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                label="Data Cadastro"
                disabled={['none', 'edit', 'new'].includes(status)}
                variant={fieldState.error && 'error'}
                helper={fieldState.error?.message}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
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
