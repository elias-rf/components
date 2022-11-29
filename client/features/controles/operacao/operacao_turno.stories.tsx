import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { TEvent } from "../../../../types";
import { OperacaoTurno } from "./operacao_turno";

const queryClient = new QueryClient();

export default {
  title: "features/controles",
  component: OperacaoTurno,
  parameters: {
    docs: {
      source: {
        code: "Desabilitado por usar Suspense",
      },
    },
  },
} as ComponentMeta<typeof OperacaoTurno>;

export const Operacao_Turno: ComponentStory<typeof OperacaoTurno> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>loading...</div>}>
        <OperacaoTurno
          operacao={{ operacao: "1010" }}
          dia={{ dia: "2021-01-08" }}
          onSelectEvent={(event: TEvent) => console.log(event)}
        />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
