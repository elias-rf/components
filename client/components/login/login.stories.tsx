import { Button } from '@/client/components/ui/button'
import { Story, StoryDefault } from '@ladle/react'
import { JsonViewer } from '@textea/json-viewer'
import { useState } from 'react'
import { Login } from './login'

export default {
  title: 'components / login',
} satisfies StoryDefault

export const Default: Story<any> = () => {
  const [user, setUser] = useState({ user: '_' })

  return (
    <>
      <Button onClick={() => setUser({ user: '' })}>Login</Button>
      <JsonViewer value={user} />
      {user.user === '' ? <Login onInput={(user) => setUser(user)} /> : null}
    </>
  )
}
