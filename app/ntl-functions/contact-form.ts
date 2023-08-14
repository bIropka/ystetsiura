import type { HandlerEvent } from '@netlify/functions'

const handler = (event: HandlerEvent) => {
  console.log(JSON.parse(event.body ?? ''))
}

export { handler }
