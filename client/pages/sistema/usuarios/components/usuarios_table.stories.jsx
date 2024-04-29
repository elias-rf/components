import { usuarioStore } from '../../../../pages/sistema/usuarios/components/usuario.store.mjs'
import { UsuarioTable } from './usuarios_table.jsx'

const meta = {
  component: UsuarioTable,
}

export default meta

export const Default = {
  render: () => (
    <>
      <div className="p-2">
        <UsuarioTable store={usuarioStore} />
      </div>
    </>
  ),
}
