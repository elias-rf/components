import { Input } from '@/client/components/ui/input'
import { useCliente } from '@/client/features/cliente/cliente_store'
import { ClienteQuantidade } from '@/client/features/cliente/components/cliente-quantidade'
import { ClienteValor } from '@/client/features/cliente/components/cliente-valor'
import { ClienteValorMedio } from '@/client/features/cliente/components/cliente-valor-medio'
import { Tab, Tabs } from '@mui/material'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useEffectOnce } from 'usehooks-ts'

export function ClienteForm() {
  const formButtonStatus = useCliente.use.formButtonStatus()()
  const recordClear = useCliente.use.recordClear()
  const setForm = useCliente.use.setForm()

  const [tab, setTab] = useState(0)
  const form = useForm({ defaultValues: recordClear, mode: 'onTouched' })

  useEffectOnce(() => {
    setForm(form)
  })

  return (
    <>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 sm:col-span-2 lg:col-span-1">
          <Controller
            name="CdCliente"
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                disabled={formButtonStatus.formDisabled}
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
                disabled={formButtonStatus.formDisabled}
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
                disabled={formButtonStatus.formDisabled}
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
                disabled={formButtonStatus.formDisabled}
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
                disabled={formButtonStatus.formDisabled}
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
                disabled={formButtonStatus.formDisabled}
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
                disabled={formButtonStatus.formDisabled}
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
                disabled={formButtonStatus.formDisabled}
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
                disabled={formButtonStatus.formDisabled}
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
                disabled={formButtonStatus.formDisabled}
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
            value={tab}
            onChange={(_: any, tab: any) => setTab(tab)}
          >
            <Tab
              label="Quantidade"
              value={0}
            />
            <Tab
              label="Valor"
              value={1}
            />
            <Tab
              label="Valor Médio"
              value={2}
            />
          </Tabs>
          {tab === 0 && <ClienteValor />}
          {tab === 1 && <ClienteQuantidade />}
          {tab === 2 && <ClienteValorMedio />}
        </div>
      </div>
    </>
  )
}
