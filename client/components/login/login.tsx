import { Button } from '@/client/components/ui/button.js'
import { FormField } from '@/client/components/ui/form-field/form-field.js'
import { Input } from '@/client/components/ui/input/input.js'
import { Label } from '@/client/components/ui/label.js'
import { Modal } from '@/client/components/ui/modal.js'
import { useForm } from '@/client/lib/hooks/use-form.js'

export type TLoginProps = {
  onInput: ({ user, password }: { user: string; password: string }) => void
}

export function Login({ onInput }: TLoginProps) {
  const form = useForm({
    value: { user: '', password: '' },
  })

  function handleInput() {
    onInput(form.value)
  }

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
          <Input
            id="user"
            name="user"
            value={form.value.user}
            onInput={form.handleChange}
          />
        </FormField>

        <FormField>
          <Label
            required
            name="password"
          >
            Senha
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={form.value.password}
            onInput={form.handleChange}
          />
        </FormField>

        <Button onClick={handleInput}>Entrar</Button>
      </div>
    </Modal>
  )
}
