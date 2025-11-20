export default async (request: Request) => {
  let data: any = null
  try {
    data = await request.json()
  } catch (e) {
    data = { error: 'invalid json' }
  }
  // Basic logging (Netlify function logs). In production replace with external analytics.
  console.log('[RUM]', data)
  return new Response(JSON.stringify({ status: 'ok' }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=0, must-revalidate'
    }
  })
}