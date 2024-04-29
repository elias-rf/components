import { DarkToggle } from '@/client/components/dark-toggle/dark-toggle.jsx'

const meta = {
  component: DarkToggle,
}

export default meta

export const Default = {
  render: () => {
    return (
      <>
        <DarkToggle />
      </>
    )
  },
}
