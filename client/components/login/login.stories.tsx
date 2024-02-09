import { Button } from '@/client/components/button/button.js'
import { JsonView } from '@/client/components/json-view/json-view.js'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Login } from './login.js'

const meta: Meta<typeof Login> = {
  component: Login,
  args: {},
}

export default meta
type Story = StoryObj<typeof Login>

export const Geral: Story = {
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
