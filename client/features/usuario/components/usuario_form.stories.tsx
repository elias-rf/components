import { Story } from '@ladle/react'
import { useForm } from 'react-hook-form'
import { UsuarioForm } from './usuario_form'

export default {
  title: 'features/usuario/usuario_form',
}

export const Form: Story = () => {
  const form = useForm({
    mode: 'onTouched',
    defaultValues: {
      kUsuario: '',
      email: '',
      nome: '',
      setor: '',
      Ativo: true,
      idGroup: '',
      NomeUsuario: '',
    },
  })
  return <UsuarioForm form={form} />
}
