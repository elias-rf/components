import type { Preview } from '@storybook/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { setupWorker } from 'msw/browser'
import '../client/index.css'
import { handlers } from '../utils/mocks/core-msw/handlers.js'

const worker = setupWorker(...handlers)
worker.start({ onUnhandledRequest: 'bypass' })

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5000 } },
})

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
      return (
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <Story />
        </QueryClientProvider>
      )
    },
  ],
}

export default preview
