import { createServerFn } from '@tanstack/react-start'

export const getServerEnvValue = createServerFn({ method: 'GET' }).handler(
  async () => ({
    message: process.env.SERVER_MESSAGE ?? 'Server value not set',
  }),
)
