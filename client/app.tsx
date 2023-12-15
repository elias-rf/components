import { authStore } from '@/client/store/auth_store.js'
import React, { Suspense } from 'react'
import { Route, Switch, useLocation } from 'wouter'
import { Layout } from './features/layout.js'
import { Home } from './pages/home.js'
import { Loading } from './pages/loading.js'
import { Login } from './pages/login.js'
import { Logout } from './pages/logout.js'

// utilidades
// const Page403 = React.lazy(async () => import('./pages/page_403'))
const Page404 = React.lazy(async () => import('./pages/page_404.js'))

// comercial
const Clientes = React.lazy(
  async () => import('./pages/comercial/clientes/clientes.js')
)
// const Faturamento = React.lazy(
//   async () => import('./pages/comercial/faturamento')
// )
const Precos = React.lazy(
  async () => import('./pages/comercial/precos/precos.js')
)
const Vendas30Dias = React.lazy(
  async () => import('./pages/comercial/vendas-30dias/vendas-30dias.js')
)

// industrial
const Controles = React.lazy(
  async () => import('./pages/industrial/controles/controles.js')
)
const LotesSaida = React.lazy(
  async () => import('./pages/industrial/lotes-saida/lotes-saida.js')
)

const Transferencia = React.lazy(
  async () => import('./pages/industrial/transferencia/transferencia.js')
)

// outros
const Agenda = React.lazy(async () => import('./pages/outros/agenda/agenda.js'))
const FileManager = React.lazy(
  async () => import('./pages/outros/file-manager/file-manager.js')
)

// sistema
const Usuario = React.lazy(
  async () => import('./pages/sistema/usuarios/usuarios.js')
)
const Permissao = React.lazy(
  async () => import('./pages/sistema/permissoes/permissoes.js')
)
const Grupos = React.lazy(
  async () => import('./pages/sistema/grupos/grupos.js')
)

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
          <Route path="/industrial/lotesSaida">
            <LotesSaida />
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
          <Route path="/outros/fileManager">
            <FileManager />
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
  )
}
