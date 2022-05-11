/** @type {import('twind').Configuration} */
const config = {
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
    },
  },
  preflight: {
    // Declare font face
    "@font-face": [
      {
        fontFamily: "Roboto",
        fontWeight: "400",
        src: 'url(/fonts/Roboto-Regular.ttf) format("ttf")',
      },
    ],
  },
};

export default config;
