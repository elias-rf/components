import { pick } from '@/utils/object/pick'
import { JsonViewer } from '@textea/json-viewer'
import { useEffect, useState } from 'react'

export function StoreViewer({
  store,
  properties,
}: {
  store: any
  properties?: string[]
}) {
  const [value, setValue] = useState(store.getState())
  useEffect(() => {
    const unsubscribe = store.subscribe((store: any) => {
      if (properties) {
        setValue(pick(store, properties))
      } else {
        setValue(store)
      }
    })
    return () => unsubscribe()
  }, [])

  return (
    <JsonViewer
      value={value}
      theme="auto"
      defaultInspectDepth={1}
    />
  )
}
