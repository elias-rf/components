import { RocketIcon } from '@radix-ui/react-icons'

import { Alert, AlertDescription, AlertTitle } from './alert.jsx'

export default {
  component: Alert,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive'],
    },
  },
}

export const Default = {
  args: {
    variant: 'default',
  },

  render: (args) => (
    <>
      <Alert {...args}>
        <RocketIcon className="w-4 h-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </>
  ),
}
