import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";
import { defineConfig } from "unocss";

const config = defineConfig({
  presets: [
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetUno(),
  ],
});

export default config;
