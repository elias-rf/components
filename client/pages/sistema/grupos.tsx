import { GruposForm } from '@/client/features/grupos/grupos_form'
import { GruposHead } from '@/client/features/grupos/grupos_head'
import { gruposStore } from '@/client/features/grupos/grupos_store'
import { GruposTable } from '@/client/features/grupos/grupos_table'

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
