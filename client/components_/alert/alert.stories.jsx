import { RocketIcon } from '@radix-ui/react-icons'

import { Alert, AlertDescription, AlertTitle } from './alert.jsx'

const meta = {
  component: Alert,
}

export default meta

export const Default = {
  render: (props) => (
    <>
      <Alert>
        <RocketIcon className="w-4 h-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </>
  ),
}
