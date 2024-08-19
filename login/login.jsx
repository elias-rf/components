import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@radix-ui/themes'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { TextForm } from '../forms/text/text-form.jsx'
import { Modal } from '../modal/modal.jsx'

export function Login({ onInput }) {
  const form = useForm({
    defaultValues: { userName: '', password: '' },
    resolver: zodResolver(
      z.object({
        userName: z.string().min(3, 'Mínimo 3 caracteres'),
        password: z.string().min(3, 'Mínimo 3 caracteres'),
      })
    ),
  })

  return (
    <Modal
      show={true}
      title="Login"
      closeable={false}
    >
      <div className="flex flex-col gap-4 p-8">
        <TextForm
          name="userName"
          control={form.control}
          rules={{}}
        >
          Usuário *
        </TextForm>

        <TextForm
          control={form.control}
          name="password"
          rules={{}}
          type="password"
        >
          Senha *
        </TextForm>
        <Button onClick={form.handleSubmit(onInput)}>Entrar</Button>
      </div>
    </Modal>
  )
}

Login.propTypes = {
  onInput: PropTypes.func,
}
