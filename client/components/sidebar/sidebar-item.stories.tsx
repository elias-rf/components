import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SidebarItem } from "./sidebar-item";

export default {
  title: "Components/SidebarItem",
  component: SidebarItem,
} as ComponentMeta<typeof SidebarItem>;

const Template: ComponentStory<typeof SidebarItem> = () => {
  return (
    <ul>
      <SidebarItem>
        {{
          icon: (
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
          ),
          title: "Kanban",
          shortcut: "Pro",
        }}
      </SidebarItem>
    </ul>
  );
};

export const Default = Template.bind({});
