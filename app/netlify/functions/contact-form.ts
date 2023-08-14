import type { HandlerEvent } from '@netlify/functions'

const handler = (event: HandlerEvent) => {
  return {
    headers: {
      'content-type': 'text/json',
    },
    statusCode: 200,
    body: event.body,
  }
}

export { handler }
