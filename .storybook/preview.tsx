import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { Preview } from "@storybook/react";
import "uno.css";
import { TrpcProvider } from "../utils/trpc/trpc-provider";

const theme = createTheme({});

const preview: Preview = {
  decorators: [
    (Story) => (
      <TrpcProvider>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </TrpcProvider>
    ),
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
