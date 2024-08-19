import { Menubar as MenubarCore } from '@ariakit/react'
import './style.css'

export function Menubar({ children }) {
  return <MenubarCore className="menubar">{children}</MenubarCore>
}
