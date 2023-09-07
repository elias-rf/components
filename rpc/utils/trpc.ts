import type { TAppRouter } from '@/rpc/app-router'
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import { createTRPCReact } from '@trpc/react-query'

let server = ''
if (process.env.NODE_ENV === 'development') server = 'http://localhost:3333'

const links = [
  httpBatchLink({
    url: `${server}/api/trpc`,
    headers() {
      const token = `Bearer ${sessionStorage.getItem('token') || 'NO_TOKEN'}`
      return { Authorization: token }
    },
  }),
]
