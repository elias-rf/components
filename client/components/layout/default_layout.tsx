import {
  AppShell,
  Box,
  Burger,
  Button,
  Flex,
  Header,
  MediaQuery,
  Menu,
  Navbar,
  useMantineTheme,
} from "@mantine/core";
import { TCurrentUser } from "@mono/types";
import { IconMessageCircle, IconSettings } from "@tabler/icons-react";
import React from "react";
import { MenuComponent } from "../menu/menu";

type TLayoutDefaultProps = {
  menu: {
    label: string;
    icon: React.ReactNode;
    items: {
      label: string;
      to: string;
    }[];
  }[];
  onClick: (to: string) => void;
  children: React.ReactNode;
  me: TCurrentUser;
};

export function LayoutDefault({
  menu,
  onClick,
  children,
  me,
}: TLayoutDefaultProps) {
  const theme = useMantineTheme();
  const [opened, setOpened] = React.useState(false);

  return (
    <AppShell
      padding={6}
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 200 }}
        >
          <Box w={185}>
            <MenuComponent
              onClick={onClick}
              menu={menu}
            ></MenuComponent>
          </Box>
        </Navbar>
      }
      header={
        <Header
          height={38}
          className="p-1"
        >
          <Flex
            justify={"space-between"}
            className=""
          >
            <Flex
              wrap="nowrap"
              direction="row"
              align="center"
            >
              <MediaQuery
                largerThan="sm"
                styles={{ display: "none" }}
              >
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                />
              </MediaQuery>
              <Button
                variant="subtle"
                color="dark"
                compact
                onClick={() => onClick("/")}
              >
                VISIONTECH
              </Button>
            </Flex>
            <Menu
              width={150}
              position="bottom-end"
            >
              <Menu.Target>
                <Button
                  variant="subtle"
                  color="dark"
                  compact
                  onClick={() => {
                    if (!me?.nome) {
                      onClick("/login");
                    }
                  }}
                >
                  {me?.nome || "Login"}
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  icon={<IconSettings size={14} />}
                  onClick={() => onClick("/user/config")}
                >
                  Configurações
                </Menu.Item>
                <Menu.Item
                  icon={<IconMessageCircle size={14} />}
                  onClick={() => onClick("/logout")}
                >
                  Sair
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Flex>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
