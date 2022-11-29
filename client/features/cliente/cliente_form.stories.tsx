import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { ClienteForm } from "./cliente_form";

const queryClient = new QueryClient();

export default {
  title: "features/cliente",
  component: ClienteForm,
  args: {
    selected: { cliente_id: 1 },
  },
  parameters: {
    docs: {
      source: {
        code: "Desabilitado por usar Suspense",
      },
    },
  },
} as ComponentMeta<typeof ClienteForm>;

export const Form: ComponentStory<typeof ClienteForm> = (props: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>loading...</div>}>
        <ClienteForm selected={props.selected} />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
