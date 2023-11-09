import { PersonIcon } from '@/client/components/icons/person-icon'
import { Avatar } from '@/client/components/ui/avatar'
import { Dropdown } from '@/client/components/ui/dropdown'
import '@/client/index.css'
import { Story, action } from '@ladle/react'

export default {
  title: 'Components / UI / Dropdown',
}

export const Default: Story = () => {
  return (
    <div className="flex space-x-20">
      <Dropdown label="Dropdown2">
        <Dropdown.Header>
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Bonnie Green</div>
            <div className="font-medium truncate">name@flowbite.com</div>
          </div>
        </Dropdown.Header>
        <Dropdown.Divider />
        <Dropdown.Item onClick={action('Dashboard')}>Dashboard</Dropdown.Item>
        <Dropdown.Item>
          <Dropdown.Sub label="Dropdown">
            <Dropdown.Item>Earnings 1</Dropdown.Item>
            <Dropdown.Item>Earnings 2</Dropdown.Item>
            <Dropdown.Item>
              <Dropdown.Sub label="Dropdown">
                <Dropdown.Item>Earnings 1</Dropdown.Item>
                <Dropdown.Item>Earnings 2</Dropdown.Item>
              </Dropdown.Sub>
            </Dropdown.Item>
          </Dropdown.Sub>
        </Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign Out</Dropdown.Item>
      </Dropdown>
      <Dropdown
        arrowIcon={false}
        label={
          <Avatar>
            <PersonIcon />
          </Avatar>
        }
        position="right"
      >
        <Dropdown.Header>
          <span className="block text-sm">TESTE</span>
        </Dropdown.Header>
        <Dropdown.Item onClick={action('/profile')}>
          alterar senha
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={action('/logout')}>logout</Dropdown.Item>
      </Dropdown>
    </div>
  )
}
