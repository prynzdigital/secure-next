// TODO: Connect to email marketing platform [NEEDS CLIENT INPUT: OQ-2]
export async function POST(request: Request) {
  const body = await request.json() as { email?: unknown }

  // Basic server-side validation
  if (!body.email || typeof body.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return Response.json({ success: false, error: 'Valid email address required' }, { status: 400 })
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('Newsletter signup:', body.email)
  }

  // Submission received — connect to email marketing platform [NEEDS CLIENT INPUT: OQ-2]
  return Response.json({ success: true })
}
