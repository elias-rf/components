import React, { Suspense } from 'react'
import { Layout } from './features/layout'
// import { Dashboard } from './pages/dashboard'

import { authStore } from '@/client/store/auth_store'
import { Flowbite } from 'flowbite-react'
import { Toaster } from 'react-hot-toast'
import { Route, Switch, useLocation } from 'wouter'
import { Home } from './pages/home'
import { Loading } from './pages/loading'
import { Login } from './pages/login'
import { Logout } from './pages/logout'

// utilidades
// const Page403 = React.lazy(async () => import('./pages/page_403'))
const Page404 = React.lazy(async () => import('./pages/page_404'))

// comercial
const Clientes = React.lazy(async () => import('./pages/comercial/clientes'))
// const Faturamento = React.lazy(
//   async () => import('./pages/comercial/faturamento')
// )
const Precos = React.lazy(async () => import('./pages/comercial/precos'))
const Vendas30Dias = React.lazy(
  async () => import('./pages/comercial/vendas_30dias')
)

// industrial
const Controles = React.lazy(async () => import('./pages/industrial/controles'))

const Transferencia = React.lazy(
  async () => import('./pages/industrial/transferencia')
)

// outros
const Agenda = React.lazy(async () => import('./pages/outros/agenda'))

// sistema
const Usuario = React.lazy(async () => import('./pages/sistema/usuarios'))
const Permissao = React.lazy(async () => import('./pages/sistema/permissoes'))
const Grupos = React.lazy(async () => import('./pages/sistema/grupos'))
const Profile = React.lazy(async () => import('./pages/profile'))

/** Componente com todas a rotas da aplicativo */
export function App() {
  const [location, setLocation] = useLocation()
  const isAuthenticated = authStore.use.isAuthenticated()

  React.useEffect(() => {
    if (!isAuthenticated() && location !== '/login') {
      setLocation('/login')
    }
  }, [location, setLocation, isAuthenticated])

  return (
    <Flowbite>
      <Toaster
        position="top-right"
        toastOptions={{
          className:
            'dark:bg-gray-800 dark:text-gray-200 border border-gray-600',
        }}
      />
      <Layout>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/comercial/precos">
              <Precos />
            </Route>
            <Route path="/comercial/vendas30dias">
              <Vendas30Dias />
            </Route>
            <Route path="/comercial/cliente">
              <Clientes />
            </Route>
            <Route path="/industrial/controles">
              <Controles />
            </Route>
            <Route path="/industrial/transferencia">
              <Transferencia />
            </Route>
            <Route path="/sistema/usuario">
              <Usuario />
            </Route>
            <Route path="/sistema/permissao">
              <Permissao />
            </Route>
            <Route path="/sistema/grupos">
              <Grupos />
            </Route>
            <Route path="/outros/agenda">
              <Agenda />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </Flowbite>
  )
}
