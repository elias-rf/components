import { GruposForm } from '@/client/pages/sistema/grupos/grupos_form.js'
import { GruposHead } from '@/client/pages/sistema/grupos/grupos_head.js'
import { gruposStore } from '@/client/pages/sistema/grupos/grupos_store.js'
import { GruposTable } from '@/client/pages/sistema/grupos/grupos_table.js'

export default function Grupos() {
  const status = gruposStore.use.status()

  return (
    <div data-name="Grupos">
      <GruposHead />
      <GruposTable />
      {status !== 'none' ? (
        <div className="mb-2 border border-gray-300 p-1">
          <GruposForm />
        </div>
      ) : null}
    </div>
  )
}
