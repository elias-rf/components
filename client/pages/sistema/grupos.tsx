import { GruposForm } from '@/client/features/grupos/grupos_form.js'
import { GruposHead } from '@/client/features/grupos/grupos_head.js'
import { gruposStore } from '@/client/features/grupos/grupos_store.js'
import { GruposTable } from '@/client/features/grupos/grupos_table.js'

export default function Grupos() {
  const status = gruposStore.use.status()

  return (
    <div data-name="Grupos">
      <GruposHead />
      <GruposTable />
      {status !== 'none' ? (
        <div className="p-1 mb-2 border border-gray-300">
          <GruposForm />
        </div>
      ) : null}
    </div>
  )
}
