import type { HandlerEvent } from '@netlify/functions'

const handler = (event: HandlerEvent) => {
  console.log(event.body)
}

export { handler }
