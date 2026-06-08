import { createFileRoute } from '@tanstack/react-router'

import { getServerEnvValue } from '#/server'

export const Route = createFileRoute('/')({
  loader: async () => {
    const serverEnv = await getServerEnvValue()
    return { serverEnv }
  },
  component: Home,
})

function Home() {
  const { serverEnv } = Route.useLoaderData()

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
      <dl className="mt-6 space-y-2 text-lg">
        <div>
          <dt className="font-semibold">Server env</dt>
          <dd>{serverEnv.message}</dd>
        </div>
        <div>
          <dt className="font-semibold">Client env</dt>
          <dd>{import.meta.env.VITE_APP_NAME}</dd>
        </div>
      </dl>
    </div>
  )
}
