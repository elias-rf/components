import { JsonView } from '@/client/components/json-view/json-view.js'
import { useEffect, useState } from 'react'

export function StoreViewer({
  store,
  properties,
  className,
}: {
  store: any
  properties?: string[]
  className?: string
}) {
  const [value, setValue] = useState(store.getState())
  useEffect(() => {
    const unsubscribe = store.subscribe((store: any) => {
      if (properties) {
        setValue(
          properties.reduce((acc: any, key: string) => {
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
