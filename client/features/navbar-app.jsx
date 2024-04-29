import { useLocation } from 'wouter'
import { DarkToggle } from '../components/dark-toggle/dark-toggle.jsx'
import { VtLogoIcon } from '../components/icons/vt-logo-icon.jsx'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '../components/menubar/menubar.jsx'

export function NavbarApp() {
  const [_, setLocation] = useLocation()
  // const auth = authStore.state(state=>state)

  function handleLink(to) {
    setLocation(to)
  }

  return (
    <>
      <Menubar>
        <div onClick={() => handleLink('/')}>
          <VtLogoIcon />
        </div>
        <MenubarMenu>
          <MenubarTrigger>Comercial</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onSelect={() => handleLink('/comercial/precos')}>
              Calculadora de preços
            </MenubarItem>
            <MenubarItem onSelect={() => handleLink('/comercial/vendas30dias')}>
              Vendas 30 dias
            </MenubarItem>
            <MenubarItem onSelect={() => handleLink('/comercial/cliente')}>
              Clientes
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Industrial</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onSelect={() => handleLink('/industrial/controles')}>
              Controles de produção
            </MenubarItem>
            <MenubarItem
              onSelect={() => handleLink('/industrial/transferencia')}
            >
              Transferência
            </MenubarItem>
            <MenubarItem onSelect={() => handleLink('/industrial/lotesSaida')}>
              Rastreamento de produtos
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Sistema</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onSelect={() => handleLink('/profile')}>
              Alterar senha
            </MenubarItem>
            <MenubarItem onSelect={() => handleLink('/logout')}>
              Logout
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem onSelect={() => handleLink('/sistema/usuario')}>
              Usuários
            </MenubarItem>
            <MenubarItem onSelect={() => handleLink('/sistema/permissao')}>
              Permissões
            </MenubarItem>
            <MenubarItem onSelect={() => handleLink('/sistema/grupos')}>
              Grupos
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Outros</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onSelect={() => handleLink('/outros/dashboard')}>
              Dashboard
            </MenubarItem>
            <MenubarItem onSelect={() => handleLink('/outros/agenda')}>
              Agenda de ramais
            </MenubarItem>
            <MenubarItem onSelect={() => handleLink('/outros/fileManager')}>
              Gestor de arquivos
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <DarkToggle />
      </Menubar>
    </>
  )
}
