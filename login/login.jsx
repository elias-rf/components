import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm } from 'react-hook-form'
import * as v from 'valibot'
import { Button } from '../button/button.jsx'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../form/form.jsx'
import { Input } from '../input/input.jsx'
import { Modal } from '../ui-old/modal/modal.jsx'

export function Login({ onInput }) {
  const form = useForm({
    defaultValues: { userName: '', password: '' },
    resolver: valibotResolver(
      v.object({
        userName: v.string([v.minLength(3, 'Mínimo 3 caracteres')]),
        password: v.string([v.minLength(3, 'Mínimo 3 caracteres')]),
      })
    ),
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
            name="userName"
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
