import { LxItem } from '@/client/components/ui/lx/lx-item'
import { Children, useEffect } from 'react'

function Lx({ children, child }: { children: React.ReactNode; child: any }) {
  useEffect(() => {
    child.value =
      Children.map(children, (child: any) => ({
        value: child?.props.value,
        label: child?.props.children,
      })) || []
  }, [])

  return <ul>{children}</ul>
}

Lx.Item = LxItem

export { Lx }