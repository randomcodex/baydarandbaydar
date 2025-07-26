export default async (request: Request, context: any) => {
  const { geo } = context

  return new Response(
    JSON.stringify({
      country: geo?.country?.code || 'CY',
      region: geo?.subdivision?.code || '',
      city: geo?.city || '',
      timezone: geo?.timezone || 'Europe/Nicosia',
    }),
    {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600',
      },
    },
  )
}
