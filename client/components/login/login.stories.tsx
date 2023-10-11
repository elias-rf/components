import { Story, StoryDefault } from '@ladle/react'
import { Login } from './login'

export default {
  title: 'components / login',
} satisfies StoryDefault

export const Default: Story<any> = (props) => {
  return (
    <>
      <Login {...props} />
    </>
  )
}
