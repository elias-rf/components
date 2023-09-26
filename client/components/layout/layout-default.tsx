import { ChevronIcon } from '@/client/components/icons/chevron-icon'
import MenuIcon from '@mui/icons-material/Menu'
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import * as React from 'react'
import { AppBar } from './layout-default_app-bar'
import { Main } from './layout-default_main'
import { Sidebar } from './sidebar'
import { TSidebarItem } from './sidebar.type'
import { Topbar } from './topbar'

const drawerWidth = 240

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

interface TLayoutDefaultProps {
  onClick: (to: string) => void
  path: string
  menu: TSidebarItem[]
  children: React.ReactNode
  user: any
}

export function LayoutDefault({
  onClick,
  children,
  menu,
  path,
  user,
}: TLayoutDefaultProps) {
  const [open, setOpen] = React.useState(window.innerWidth >= drawerWidth * 3)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const openMenu = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className="flex">
      <AppBar
        position="fixed"
        open={open}
        width={drawerWidth}
        className="print:invisible"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Topbar onClick={onClick} />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        className="print:invisible"
      >
        <div className="flex items-center justify-between">
          <Button onClick={handleClick}>{user?.nome}</Button>
          <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={() => onClick('/profile')}>Profile</MenuItem>
            <MenuItem onClick={() => onClick('/logout')}>Logout</MenuItem>
          </Menu>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              <ChevronIcon variant="left" />
            </IconButton>
          </DrawerHeader>
        </div>
        <Divider />
        <Sidebar
          menu={menu}
          onClick={onClick}
          path={path}
        />
      </Drawer>
      <Main
        open={open}
        width={drawerWidth}
      >
        <DrawerHeader />
        <div className="print:visible">{children}</div>
      </Main>
    </div>
  )
}
