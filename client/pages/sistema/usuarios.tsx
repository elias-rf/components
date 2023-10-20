import { UsuarioForm } from '@/client/features/usuario/usuario_form'
import { UsuarioHead } from '@/client/features/usuario/usuario_head'
import { usuarioStore } from '@/client/features/usuario/usuario_store'
import { UsuarioTable } from '@/client/features/usuario/usuario_table'

export default function Usuarios() {
  const status = usuarioStore.use.status()

  return (
    <div data-name="Usuario">
      <UsuarioHead />
      <UsuarioTable />
      {status !== 'none' ? (
        <div className="p-1 mb-2 border border-gray-300">
          <UsuarioForm />
        </div>
      ) : null}
    </div>
  )
}
