import type { Preview } from "@storybook/react";
import "uno.css";
import { TrpcProvider } from "../utils/trpc/trpc-provider";

const preview: Preview = {
  decorators: [
    (Story)=>  (
      <TrpcProvider>
        <Story />
      </TrpcProvider>
    )
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

};

export const globalTypes = {
  darkMode: true,
};

export default preview;
