import { NextResponse } from 'next/server'

/**
 * GET endpoint to check the status of the Hugging Face server (replica).
 * Uses a HEAD request to minimize payload and includes cache-busting.
 */
export async function GET() {
  try {
    const response = await fetch(process.env.HF_API_ENDPOINT!, {
      method: 'HEAD',
      headers: {
        Authorization: `Bearer ${process.env.HF_BEARER_TOKEN}`,
      },
      cache: 'no-store', // Ensure no caching on the client side
    })

    // Check the response status and return appropriate server status
    if (response.ok) {
      return NextResponse.json({ status: 'online' }, { headers: { 'Cache-Control': 'no-store' } })
    } else if (response.status === 503) {
      return NextResponse.json(
        { status: 'initializing' },
        { headers: { 'Cache-Control': 'no-store' } }
      )
    } else {
      return NextResponse.json({ status: 'offline' }, { headers: { 'Cache-Control': 'no-store' } })
    }
  } catch (error) {
    // Log error for debugging (ensure sensitive data is not exposed)
    console.error('Error fetching server status:', error)
    return NextResponse.json({ status: 'offline' }, { headers: { 'Cache-Control': 'no-store' } })
  }
}

export const config = {
  runtime: 'edge', // Run on the Edge Runtime for faster response times
}
