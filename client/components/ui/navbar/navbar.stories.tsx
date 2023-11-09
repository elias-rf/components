import { PersonIcon } from '@/client/components/icons/person-icon'
import { VtLogoIcon } from '@/client/components/icons/vt-logo-icon'
import { Avatar } from '@/client/components/ui/avatar'
import { DarkToggle } from '@/client/components/ui/dark-toggle'
import { Dropdown } from '@/client/components/ui/dropdown'
import { Navbar } from '@/client/components/ui/navbar'
import '@/client/index.css'
import type { Story } from '@ladle/react'
import { action } from '@ladle/react'

export default {
  title: 'Components / UI / Navbar',
}

export const Default: Story = () => {
  return (
    <>
      <Navbar className="bg-gray-100 border-gray-200 dark:border-gray-700">
        <Navbar.Brand>
          <VtLogoIcon className="w-8 h-8" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Visiontech
          </span>
        </Navbar.Brand>
        <Navbar.Menu>
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
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>Bonnie Green</div>
                <div className="font-medium truncate">name@flowbite.com</div>
              </div>
            </Dropdown.Header>
            <Dropdown.Item onClick={() => action('/profile')}>
              alterar senha
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => action('/logout')}>
              logout
            </Dropdown.Item>
          </Dropdown>
          <DarkToggle />
          <Navbar.Toggle />
        </Navbar.Menu>
        <Navbar.Collapse>
          <Navbar.Item>
            <Dropdown label="Dropdown2">
              <Dropdown.Header>
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>Bonnie Green</div>
                  <div className="font-medium truncate">name@flowbite.com</div>
                </div>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item onClick={action('Dashboard')}>
                Dashboard
              </Dropdown.Item>
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
          </Navbar.Item>
          <Navbar.Item>
            <Dropdown label="Dropdown2">
              <Dropdown.Header>
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>Bonnie Green</div>
                  <div className="font-medium truncate">name@flowbite.com</div>
                </div>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item onClick={action('Dashboard')}>
                Dashboard
              </Dropdown.Item>
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
          </Navbar.Item>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
