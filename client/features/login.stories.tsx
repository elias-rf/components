import type { Story } from '@ladle/react'
import { Login } from './login'

export default {
  title: 'features/login',
}

function LoginStory() {
  return <Login />
}

export const Form: Story = () => <LoginStory />
