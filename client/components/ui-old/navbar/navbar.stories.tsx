import { PersonIcon } from '@/client/components/icons/person-icon.js'
import { VtLogoIcon } from '@/client/components/icons/vt-logo-icon.js'
import { Avatar } from '@/client/components/ui-old/avatar.js'
import { DarkToggle } from '@/client/components/ui-old/dark-toggle.js'
import { Dropdown } from '@/client/components/ui-old/dropdown/dropdown.js'
import { Navbar } from '@/client/components/ui-old/navbar/navbar.js'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Navbar> = {
  component: Navbar,
}

export default meta
type Story = StoryObj<typeof Navbar>

export const Default: Story = {
  render: () => {
    return (
      <>
        <Navbar className="border-gray-200 bg-gray-100 dark:border-gray-700">
          <Navbar.Brand>
            <VtLogoIcon className="h-8 w-8" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
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
                  <div className="truncate font-medium">name@flowbite.com</div>
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
                    <div className="truncate font-medium">
                      name@flowbite.com
                    </div>
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
                    <div className="truncate font-medium">
                      name@flowbite.com
                    </div>
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
  },
}
