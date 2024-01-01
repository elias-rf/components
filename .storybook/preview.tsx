import type { Preview } from '@storybook/react'
import '../client/index.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, args) => {
      // console.log(args.globals.backgrounds.value)
      if (args.globals.backgrounds.value === '#333333') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return <Story />
    },
  ],
}

export default preview
