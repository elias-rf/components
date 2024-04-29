import { toast, Toaster } from 'react-hot-toast'
import { useLocation } from 'wouter'
import { Login as LoginComponent } from '../components_/login/login.jsx'
import { authStore } from '../store/auth_store.mjs'

/**
 * Componente para tela de login
 *
 * @returns {*} componente <LoginView />
 */
export function Login() {
  const [_, setLocation] = useLocation()

  async function handleInput({ userName, password }) {
    try {
      const login = await authStore.login(userName, password)

      if (login && login.id && login.id > 0) {
        setLocation('/')
      }
    } catch (error) {
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
