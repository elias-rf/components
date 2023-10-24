import { JsonView } from '@/client/components/json-view/json-view'
import { pick } from '@/utils/object/pick'
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

  return <JsonView data={value} />
}
