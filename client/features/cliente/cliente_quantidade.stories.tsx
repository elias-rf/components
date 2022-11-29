import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { ClienteQuantidade } from "./cliente_quantidade";

const queryClient = new QueryClient();

export default {
  title: "features/cliente",
  component: ClienteQuantidade,
  args: {
    id: { cliente_id: 189 },
  },
  parameters: {
    docs: {
      source: {
        code: "Desabilitado por usar Suspense",
      },
    },
  },
} as ComponentMeta<typeof ClienteQuantidade>;

export const Quantidade: ComponentStory<typeof ClienteQuantidade> = (
  props: any
) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>loading...</div>}>
        <ClienteQuantidade id={props.id} />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
