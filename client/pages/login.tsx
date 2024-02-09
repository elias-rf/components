import { Login as LoginComponent } from '@/client/components/login/login.js'
import { authStore } from '@/client/store/auth_store.js'
import { toast, Toaster } from 'react-hot-toast'
import { useLocation } from 'wouter'

/**
 * Componente para tela de login
 *
 * @returns {*} componente <LoginView />
 */
export function Login() {
  const [_, setLocation] = useLocation()

  async function handleInput({
    userName,
    password,
  }: {
    userName: string
    password: string
  }) {
    try {
      const login = await authStore.login(userName, password)

      if (login && login.usuario_id && login.usuario_id > 0) {
        setLocation('/')
      }
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <div className={'flex justify-center'}>
      <LoginComponent onInput={handleInput} />
      <Toaster position="bottom-right" />
    </div>
  )
}
