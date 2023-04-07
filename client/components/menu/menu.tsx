"use client";

import { Box, NavLink } from "@mantine/core";

export type TMenuComponentProps = {
  menu: {
    label: string;
    icon: React.ReactNode;
    items: {
      label: string;
      to: string;
    }[];
  }[];
  onClick: (to: string) => void;
};

export function MenuComponent({ menu, onClick }: TMenuComponentProps) {
  return (
    <Box w={185}>
      {menu.map((grupo) => {
        return (
          <NavLink
            label={grupo.label}
            key={grupo.label}
            icon={grupo.icon}
          >
            {grupo.items.map((link) => {
              return (
                <NavLink
                  label={link.label}
                  key={link.label}
                  onClick={() => onClick(link.to)}
                />
              );
            })}
          </NavLink>
        );
      })}
    </Box>
  );
}
