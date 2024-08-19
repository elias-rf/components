import { MenuButton } from './menu-button.jsx'
import { MenuHeading } from './menu-heading.jsx'
import { MenuItem } from './menu-item.jsx'
import { MenuItems } from './menu-items.jsx'
import { MenuSection } from './menu-section.jsx'
import { MenuSeparator } from './menu-separator.jsx'
import { Menu } from './menu.jsx'

const meta = {
  component: Menu,
}

export default meta

export const Default = {
  args: {},
  render: () => {
    return (
      <Menu>
        <MenuButton>My account</MenuButton>
        <MenuItems>
          <MenuSection>
            <MenuHeading>Group 1</MenuHeading>
            <MenuItem>
              <a href="/settings">Settings</a>
            </MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuSection>
            <MenuHeading>Group 2</MenuHeading>
            <MenuItem>
              <a href="/support">Support</a>
            </MenuItem>
            <MenuItem>
              <a href="/license">License</a>
            </MenuItem>
          </MenuSection>
        </MenuItems>
      </Menu>
    )
  },
}
