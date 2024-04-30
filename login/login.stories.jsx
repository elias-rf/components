import { Button } from '@/client/components/button/button.jsx'
import { JsonView } from '@/client/components/json-view/json-view.jsx'
import { useState } from 'react'
import { Login } from './login.jsx'

const meta = {
  component: Login,
  args: {},
}

export default meta

export const Geral = {
  render: () => {
    const [user, setUser] = useState({ userName: '_' })

    return (
      <>
        <Button onClick={() => setUser({ userName: '' })}>Login</Button>
        <JsonView data={user} />
        {user.userName === '' ? (
          <Login onInput={(user) => setUser(user)} />
        ) : null}
      </>
    )
  },
}
