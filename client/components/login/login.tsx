import { Button } from '@/client/components/ui/button'
import { Input } from '@/client/components/ui/input'
import { Modal } from '@/client/components/ui/modal'
import { useForm, Controller } from 'react-hook-form'

export type TLoginProps = {
  onInput: ({ user, password }: { user: string; password: string }) => void
}

export function Login({ onInput }: TLoginProps) {
  const form = useForm({
    mode: 'onTouched',
    defaultValues: { user: '', password: '' },
  })

  function handleInput() {
    onInput(form.getValues())
  }

  return (
    <Modal
      show={true}
      title="Login"
      closeable={false}
    >
      <div className="m-4 w-60 flex flex-col alignItems-center gap-4 pb-4">
        <Controller
          name="user"
          control={form.control}
          rules={{
            required: 'Usuário é obrigatório',
          }}
          render={({ field, fieldState }) => (
            <Input
              required
              label="Usuário"
              variant={fieldState.error && 'error'}
              helper={fieldState.error?.message}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
        <Controller
          name="password"
          control={form.control}
          rules={{
            required: 'Senha é obrigatório',
          }}
          render={({ field, fieldState }) => (
            <Input
              required
              label="Senha"
              type="password"
              variant={fieldState.error && 'error'}
              helper={fieldState.error?.message}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
        <Button onClick={handleInput}>Entrar</Button>
      </div>
    </Modal>
  )
}
