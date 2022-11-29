import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { authenticationService } from "../../service/authentication.service";
import Vendas30dias from "./vendas_30dias";

const queryClient = new QueryClient();
await authenticationService.login("elias", "jkl");
export default {
  title: "Pages/Comercial/Vendas30Dias",
  component: Vendas30dias,
  parameters: {
    docs: {
      source: {
        code: "Desabilitado por usar Suspense",
      },
    },
  },
} as ComponentMeta<typeof Vendas30dias>;

export const Default: ComponentStory<typeof Vendas30dias> = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>loading...</div>}>
          <Vendas30dias />
        </Suspense>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

Default.storyName = "Vendas 30 Dias";
