import { JsonView } from '@/client/components/json-view/json-view.js'
import { Button } from '@/client/components/ui/button.js'
import { Story, StoryDefault } from '@ladle/react'
import { useState } from 'react'
import { Login } from './login.js'

export default {
  title: 'components / login',
} satisfies StoryDefault

export const Default: Story<any> = () => {
  const [user, setUser] = useState({ user: '_' })

  return (
    <>
      <Button onClick={() => setUser({ user: '' })}>Login</Button>
      <JsonView data={user} />
      {user.user === '' ? <Login onInput={(user) => setUser(user)} /> : null}
    </>
  )
}
