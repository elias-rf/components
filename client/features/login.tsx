import { authStore } from '@/client/store/auth_store'
import toast from 'react-hot-toast'
import { useLocation } from 'wouter'
import { Login as LoginComponent } from '../components/login/login'

/**
 * Componente para tela de login
 *
 * @returns {*} componente <LoginView />
 */
export function Login() {
  const [_, setLocation] = useLocation()

  const saveLogin = authStore.use.login()

  async function handleInput(user: { user: string; password: string }) {
    try {
      const login = await saveLogin(user)
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
    </div>
  )
}
