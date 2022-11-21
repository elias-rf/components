import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { ClienteValor } from "./cliente_valor";

const queryClient = new QueryClient();

export default {
  title: "Features/Cliente",
  component: ClienteValor,
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
} as ComponentMeta<typeof ClienteValor>;

export const Valor: ComponentStory<typeof ClienteValor> = (props: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>loading...</div>}>
        <ClienteValor id={props.id} />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
