import { Input } from '@/client/components/ui/input'
import { ClienteQuantidade } from '@/client/features/cliente/components/cliente-quantidade'
import { ClienteValor } from '@/client/features/cliente/components/cliente-valor'
import { ClienteValorMedio } from '@/client/features/cliente/components/cliente-valor-medio'
import { Tab, Tabs } from '@mui/material'
import React from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'

type TClienteFormProps = {
  form: UseFormReturn<any>
  disabled: boolean
}

export function ClienteForm({ form, disabled }: TClienteFormProps) {
  const [tab, setTab] = React.useState(0)
  return (
    <>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 sm:col-span-2 lg:col-span-1">
          <Controller
            name="CdCliente"
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                label="Cód."
                disabled={disabled}
                variant={fieldState.error && 'error'}
                helper={fieldState.error?.message}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
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
                disabled={disabled}
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
                disabled={disabled}
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
            name="UF"
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                label="Uf"
                disabled={disabled}
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
                disabled={disabled}
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
                disabled={disabled}
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
                disabled={disabled}
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
                disabled={disabled}
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
                disabled={disabled}
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
                disabled={disabled}
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
          {tab === 0 && <ClienteValor id={form.getValues('CdCliente')} />}
          {tab === 1 && <ClienteQuantidade id={form.getValues('CdCliente')} />}
          {tab === 2 && <ClienteValorMedio id={form.getValues('CdCliente')} />}
        </div>
      </div>
    </>
  )
}
