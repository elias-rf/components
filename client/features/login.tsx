import { useAuth } from '@/client/store/auth'
import { rpc } from '@/rpc/rpc-client'
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

  const saveLogin = useAuth((state) => state.login)

  async function handleInput(user: { user: string; password: string }) {
    try {
      const login = await rpc.usuario.login(user)
      if (login && login.usuario_id && login.usuario_id > 0) {
        saveLogin(login)
        setLocation('/')
      }
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <div className={'flex justify-center'}>
      login
      <LoginComponent onInput={handleInput} />
    </div>
  )
}
