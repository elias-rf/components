import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { AgendaTelefoneForm } from "./agenda_telefone_form";

const queryClient = new QueryClient();

export default {
  title: "Features/Agenda Telefone",
  component: AgendaTelefoneForm,
  args: {
    id: { agenda_telefone_id: 100 },
  },
  parameters: {
    docs: {
      source: {
        code: "Desabilitado por usar Suspense",
      },
    },
  },
} as ComponentMeta<typeof AgendaTelefoneForm>;

export const Form: ComponentStory<typeof AgendaTelefoneForm> = (props: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>loading...</div>}>
        <AgendaTelefoneForm id={props.id} />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
