import { JsonView } from '@/client/components/json-view/json-view.jsx'
import { useEffect, useState } from 'react'

export function StoreViewer({ store, properties, className }) {
  const [value, setValue] = useState(store.getState())
  useEffect(() => {
    const unsubscribe = store.subscribe((store) => {
      if (properties) {
        setValue(
          properties.reduce((acc, key) => {
            acc.push({ [key]: store[key] })
            return acc
          }, [])
        )
      } else {
        setValue(store)
      }
    })
    return () => unsubscribe()
  }, [])

  return (
    <JsonView
      data={value}
      className={className}
    />
  )
}
