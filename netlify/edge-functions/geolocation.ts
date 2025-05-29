export default async (request: Request, context: any) => {
  const { geo } = context

  // Return geolocation data for potential region-specific content
  return new Response(
    JSON.stringify({
      country: geo?.country?.code || 'US',
      region: geo?.subdivision?.code || '',
      city: geo?.city || '',
      timezone: geo?.timezone || 'UTC',
    }),
    {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    },
  )
}
