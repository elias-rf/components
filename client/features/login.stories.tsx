import type { Story } from '@ladle/react'
import { Login } from './login.js'

export default {
  title: 'features/login',
}

function LoginStory() {
  return <Login />
}

export const Form: Story = () => <LoginStory />
