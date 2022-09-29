import type { Story } from "@ladle/react";
import { Sidebar } from "./sidebar";

export default {
  title: "Sidebar",
  component: Sidebar,
};

const Template: Story<typeof Sidebar> = () => {
  return (
    <>
      <Sidebar></Sidebar>
    </>
  );
};

export const Default = Template.bind({});
