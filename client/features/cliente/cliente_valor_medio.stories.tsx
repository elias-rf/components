import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { ClienteValorMedio } from "./cliente_valor_medio";

const queryClient = new QueryClient();

export default {
  title: "features/cliente",
  component: ClienteValorMedio,
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
} as ComponentMeta<typeof ClienteValorMedio>;

export const ValorMedio: ComponentStory<typeof ClienteValorMedio> = (
  props: any
) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>loading...</div>}>
        <ClienteValorMedio id={props.id} />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
