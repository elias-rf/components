import { sleep } from '@/utils/sleep.js'

type TMiddle = (request: {
  url: string
  options?: Record<string, string | any>
}) => Promise<{ body: any; options?: Record<string, string | any> } | undefined>

type TMiddleRpc = (rpc: {
  id: string
  method: string
  params?: any
}) => Promise<any | undefined>

const middles: TMiddle[] = []
const middlesRpc: TMiddleRpc[] = []
const history: { request: any; response: any }[] = []

function removeTrailingSlash(input: string) {
  return input[input.length - 1] === '/'
    ? input.slice(0, input.length - 1)
    : input
}

export async function mockedFetch(
  url: string,
  options: Record<string, string | any> = {}
): Promise<any> {
  const newUrl = removeTrailingSlash(url)
  const request = { url: newUrl, options }
  for (const middleRpc of middlesRpc) {
    const body = JSON.parse(options.body)

    const response = await middleRpc(body)
    if (response) {
      history.push({ request, response })
      await sleep(20)
      return new Response(JSON.stringify({ id: body.id, result: response }))
    }
  }

  for (const middle of middles) {
    const response = await middle({ url: newUrl, options })
    if (response) {
      history.push({ request, response })
      await sleep(20)
      return new Response(JSON.stringify(response.body), response.options)
    }
  }

  const response = { body: {}, options: { status: 404 } }
  history.push({ request, response })
  return new Response(JSON.stringify(response.body), response.options)
}

mockedFetch.add = (middle: TMiddle) => {
  middles.push(middle)
}

mockedFetch.addRpc = (middleRpc: TMiddleRpc) => {
  middlesRpc.push(middleRpc)
}

mockedFetch.reset = () => {
  middles.length = 0
  middlesRpc.length = 0
  history.length = 0
}

mockedFetch.clearHistory = () => {
  history.length = 0
}

mockedFetch.history = () => {
  return history
}

const g: any =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof self !== 'undefined' && self) ||
  // eslint-disable-next-line no-undef
  (typeof global !== 'undefined' && global) ||
  {}

g.fetch = mockedFetch as any
