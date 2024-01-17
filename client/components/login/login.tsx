import { Button } from '@/client/components/button/button.js'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/client/components/form/form.js'
import { Input } from '@/client/components/input/input.js'
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
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onInput)}
          className="alignItems-center m-4 flex w-60 flex-col gap-4 pb-4"
        >
          <FormField
            control={form.control}
            name="user"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuário *</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha *</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Entrar</Button>
        </form>
      </Form>
    </Modal>
  )
}
