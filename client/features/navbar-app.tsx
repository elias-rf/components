import { PersonIcon } from '@/client/components/icons/person-icon.js'
import { VtLogoIcon } from '@/client/components/icons/vt-logo-icon.js'
import { Avatar } from '@/client/components/ui-old/avatar.js'
import { DarkToggle } from '@/client/components/ui-old/dark-toggle.js'
import { Dropdown } from '@/client/components/ui-old/dropdown/dropdown.js'
import { Navbar } from '@/client/components/ui-old/navbar/navbar.js'
import { authStore } from '@/client/store/auth_store.js'
import { useSnapshot } from 'valtio'
import { useLocation } from 'wouter'

export function NavbarApp() {
  const [_, setLocation] = useLocation()
  const auth = useSnapshot(authStore.state)

  function handleLink(to: string) {
    setLocation(to)
  }

  return (
    <>
      <Navbar
        data-name="Navbar"
        className="z-20 bg-gray-100 border-gray-200 dark:border-gray-700"
      >
        <Navbar.Brand
          onClick={() => handleLink('/')}
          className="p-1 cursor-pointer"
        >
          <VtLogoIcon className="w-8 h-8" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Visiontech
          </span>
        </Navbar.Brand>
        <div className="flex items-center space-x-2 md:order-2">
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
              <div className="px-4 py-1 text-sm text-gray-900 dark:text-white">
                <span className="block text-sm">{auth.user.nome}</span>
              </div>
            </Dropdown.Header>
            <Dropdown.Item onClick={() => handleLink('/profile')}>
              alterar senha
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => handleLink('/logout')}>
              logout
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
          <DarkToggle />
        </div>
        <Navbar.Collapse>
          <Dropdown label={<div className="dark:text-gray-200">Comercial</div>}>
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
          >
            <Dropdown.Item onClick={() => handleLink('/industrial/controles')}>
              Controles de produção
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleLink('/industrial/transferencia')}
            >
              Transferência
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleLink('/industrial/lotesSaida')}>
              Rastreamento de produtos
            </Dropdown.Item>
          </Dropdown>
          <Dropdown label={<div className="dark:text-gray-200">Sistema</div>}>
            <Dropdown.Item onClick={() => handleLink('/sistema/usuario')}>
              Usuários
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleLink('/sistema/permissao')}>
              Permissões
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleLink('/sistema/grupos')}>
              Grupos
            </Dropdown.Item>
          </Dropdown>
          <Dropdown label={<div className="dark:text-gray-200">Outros</div>}>
            <Dropdown.Item onClick={() => handleLink('/outros/agenda')}>
              Agenda de ramais
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleLink('/outros/fileManager')}>
              Gestor de arquivos
            </Dropdown.Item>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
