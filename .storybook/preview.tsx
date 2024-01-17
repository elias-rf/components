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
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'white',
          value: '#fff',
        },
        {
          name: 'black',
          value: '#000',
        },
      ],
    },
  },
  decorators: [
    (Story, args) => {
      if (
        args.globals.backgrounds &&
        args.globals.backgrounds.value === '#000'
      ) {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
      return <Story />
    },
  ],
}

export default preview
