import { Login as LoginComponent } from '../features/login.js'

/**
 * Componente para tela de login
 *
 * @returns {*} componente <LoginView />
 */
export function Login() {
  return (
    <div className={'flex justify-center'}>
      <LoginComponent />
    </div>
  )
}
