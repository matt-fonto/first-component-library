import type { Preview } from "@storybook/react";
import "tailwindcss/tailwind.css";
import "../src/index.css"; // assuming that you've imported Tailwind in your index.css file

const preview: Preview = {
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

export default preview;
