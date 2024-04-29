import { Avatar, AvatarFallback } from './avatar.jsx'

const meta = {
  component: Avatar,
}

export default meta

export const Default = {
  render: (props) => (
    <>
      <Avatar>
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
    </>
  ),
}
