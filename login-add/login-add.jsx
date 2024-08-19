import { Button } from '@radix-ui/themes'
import * as React from 'react'
import { FormLabel } from '../form/form-label.jsx'
import { Input } from '../input/input.jsx'

/**
 * @typedef {Object} LoginProps
 * @property {function} onInput - A callback function that is called when the user clicks the "Entrar" (Login) button, passing the email and password as arguments.
 * @property {function} onNewUser - A callback function that is called when the user clicks the "Criar conta" (Create Account) button.
 * @property {function} onLostPassword - A callback function that is called when the user clicks the "Esqueceu a sua senha?" (Forgot Password) link.
 */

/**
 * Renders a login form with email and password inputs, as well as buttons for creating a new user account and logging in.
 * @type {React.FC<LoginProps>}
 */
export function LoginAdd({ onInput, onNewUser, onLostPassword }) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <div className="flex flex-col justify-center min-h-full p-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-2 text-2xl font-bold text-center text-gray-900 w-60">
          Entrar no sistema
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="my-4">
          <FormLabel
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="my-4">
          <div className="flex items-center justify-between">
            <FormLabel
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Senha
            </FormLabel>
            <div className="text-sm">
              <a
                className="font-semibold text-indigo-600 cursor-pointer hover:text-indigo-500"
                onClick={onLostPassword}
              >
                Esqueceu a sua senha?
              </a>
            </div>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="flex items-center justify-between space-x-4">
          <Button
            onClick={() => onNewUser({ email, password })}
            variant="outline"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Criar conta
          </Button>
          <Button
            onClick={() => onInput({ email, password })}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Entrar
          </Button>
        </div>
      </div>
    </div>
  )
}
