import { ClienteForm } from '@/client/features/cliente/cliente_form'
import type { Story } from '@ladle/react'
import { useForm } from 'react-hook-form'

export default {
  title: 'features/cliente/cliente-form',
}

export const Form: Story = () => {
  const form = useForm({
    mode: 'onTouched',
    defaultValues: {
      cidade: '',
      cliente_id: '',
      cnpj: '',
      data_cadastro: '',
      eh_ativo: true,
      email: '',
      identidade: '',
      nome: '',
      uf: '',
      vendedor_id: '',
    },
  })

  return (
    <ClienteForm
      form={form}
      disabled={false}
    />
  )
}
