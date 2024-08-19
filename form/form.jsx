import * as Ariakit from '@ariakit/react'

import './style.css'

export function Form({ store, children }) {
  return (
    <Ariakit.Form
      store={store}
      className="wrapper"
    >
      {children}
    </Ariakit.Form>
  )
}
