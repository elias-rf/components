import { Avatar, AvatarFallback } from './avatar.jsx'

export default {
  component: Avatar,
}

export const Default = {
  render: () => (
    <>
      <Avatar>
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
    </>
  ),
}
