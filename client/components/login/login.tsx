import { Button } from '@/client/components/ui-old/button/button.js'
import { FormField } from '@/client/components/ui-old/form-field/form-field.js'
import { InputForm } from '@/client/components/ui-old/input/input-form.js'
import { Label } from '@/client/components/ui-old/label.js'
import { Modal } from '@/client/components/ui-old/modal.js'
import { useForm } from 'react-hook-form'

export type TLoginProps = {
  onInput: ({ user, password }: { user: string; password: string }) => void
}

export function Login({ onInput }: TLoginProps) {
  const form = useForm({
    defaultValues: { user: '', password: '' },
  })

  return (
    <Modal
      show={true}
      title="Login"
      closeable={false}
    >
      <div className="alignItems-center m-4 flex w-60 flex-col gap-4 pb-4">
        <FormField>
          <Label
            required
            name="user"
          >
            Usuário
          </Label>
          <InputForm {...form.register('user')} />
        </FormField>

        <FormField>
          <Label
            required
            name="password"
          >
            Senha
          </Label>
          <InputForm
            {...form.register('password')}
            type="password"
          />
        </FormField>

        <Button onClick={form.handleSubmit(onInput)}>Entrar</Button>
      </div>
    </Modal>
  )
}
