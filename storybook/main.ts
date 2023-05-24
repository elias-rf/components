import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../client/**/*.story.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  staticDirs: ["../public"],
  async viteFinal(config) {
    config.server.proxy = {
      "/api": "http://localhost:3333",
    };
    return config;
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
