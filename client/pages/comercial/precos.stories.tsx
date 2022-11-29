import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { authenticationService } from "../../service/authentication.service";
import Precos from "./precos";

const queryClient = new QueryClient();
await authenticationService.login("elias", "jkl");
export default {
  title: "Pages/Comercial/Precos",
  component: Precos,
  parameters: {
    docs: {
      source: {
        code: "Desabilitado por usar Suspense",
      },
    },
  },
} as ComponentMeta<typeof Precos>;

export const Precos_: ComponentStory<typeof Precos> = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>loading...</div>}>
          <Precos />
        </Suspense>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
