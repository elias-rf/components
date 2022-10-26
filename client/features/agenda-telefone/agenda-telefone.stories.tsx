import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AgendaTelefoneList } from "./agenda-telefone-list";

const queryClient = new QueryClient();

export default {
  title: "Features/Agenda Telefone",
  component: AgendaTelefoneList,
  argTypes: { onClick: { action: "onClick" }, onClose: { action: "onClose" } },
  parameters: {
    mockData: [
      {
        url: "http://localhost:6006/api/rpc",
        method: "POST",
        status: 200,
        response: {
          data: "Hello storybook-addon-mock!",
        },
      },
    ],
  },
} as ComponentMeta<typeof AgendaTelefoneList>;

export const Default: ComponentStory<typeof AgendaTelefoneList> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AgendaTelefoneList />
    </QueryClientProvider>
  );
};
