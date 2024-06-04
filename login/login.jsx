import { zodResolver } from '@hookform/resolvers/zod'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
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
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onInput)}
          className="flex flex-col gap-4 pb-4 m-4 alignItems-center w-60"
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
          <Button>Entrar</Button>
        </form>
      </Form>
    </Modal>
  )
}

Login.propTypes = {
  onInput: PropTypes.func,
}
