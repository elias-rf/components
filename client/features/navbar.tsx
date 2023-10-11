import { VtLogoIcon } from '@/client/components/icons/vt-logo-icon'
import { useAuth } from '@/client/store/auth'
import {
  Avatar,
  DarkThemeToggle,
  Dropdown,
  Navbar as FbNavbar,
} from 'flowbite-react'
import { useLocation } from 'wouter'

export function Navbar() {
  const [_, setLocation] = useLocation()

  const user = useAuth((state) => state.user)

  function handleLink(to: string) {
    setLocation(to)
  }

  return (
    <>
      <FbNavbar
        data-name="Navbar"
        fluid
        className="z-20 bg-gray-100 border-gray-200 dark:border-gray-700"
      >
        <FbNavbar.Brand
          onClick={() => handleLink('/')}
          className="cursor-pointer"
        >
          <VtLogoIcon className="w-8 h-8" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Visiontech
          </span>
        </FbNavbar.Brand>
        <div className="flex items-center md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                rounded
                size="xs"
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user.nome}</span>
            </Dropdown.Header>
            <Dropdown.Item onClick={() => handleLink('/profile')}>
              alterar senha
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => handleLink('/logout')}>
              logout
            </Dropdown.Item>
          </Dropdown>
          <FbNavbar.Toggle />
          <DarkThemeToggle />
        </div>
        <FbNavbar.Collapse>
          <Dropdown
            label={<div className="dark:text-gray-200">Comercial</div>}
            inline
          >
            <Dropdown.Item onClick={() => handleLink('/comercial/precos')}>
              Calculadora de preços
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleLink('/comercial/vendas30dias')}
            >
              Vendas 30 dias
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleLink('/comercial/cliente')}>
              Clientes
            </Dropdown.Item>
          </Dropdown>
          <Dropdown
            label={<div className="dark:text-gray-200">Industrial</div>}
            inline
          >
            <Dropdown.Item onClick={() => handleLink('/industrial/controles')}>
              Controles de produção
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleLink('/industrial/transferencia')}
            >
              Transferência
            </Dropdown.Item>
          </Dropdown>
          <Dropdown
            label={<div className="dark:text-gray-200">Sistema</div>}
            inline
          >
            <Dropdown.Item onClick={() => handleLink('/sistema/usuario')}>
              Usuários
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleLink('/sistema/permissao')}>
              Permissões
            </Dropdown.Item>
          </Dropdown>
          <Dropdown
            label={<div className="dark:text-gray-200">Outros</div>}
            inline
          >
            <Dropdown.Item onClick={() => handleLink('/outros/agenda')}>
              Agenda de ramais
            </Dropdown.Item>
          </Dropdown>
        </FbNavbar.Collapse>
      </FbNavbar>
    </>
  )
}
