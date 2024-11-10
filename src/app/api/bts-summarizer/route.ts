import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const HF_API_ENDPOINT = process.env.HF_API_ENDPOINT
const HF_BEARER_TOKEN = process.env.HF_BEARER_TOKEN

/**
 * Input schema for validating summarization request.
 * Ensures the input text is between 1 and 10,000 characters.
 */
const inputSchema = z.object({
  text: z.string().min(1, 'Article text is required').max(10000, 'Article text is too long'),
})

/**
 * POST handler for the bts-summarizer API route.
 * Sends a request to the Hugging Face API to generate a summary and returns the summary in JSON format.
 * @param request - The incoming HTTP request object
 * @returns JSON response with either the summary or an error message
 */
export async function POST(request: NextRequest) {
  try {
    // Parse and validate the incoming request body using zod schema
    const body = await request.json()
    const { text } = inputSchema.parse(body)

    // Ensure the API endpoint and token are configured
    if (!HF_API_ENDPOINT || !HF_BEARER_TOKEN) {
      throw new Error('Hugging Face API endpoint or token is not configured')
    }

    // Send a POST request to the Hugging Face Inference API with the article text
    const response = await fetch(HF_API_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${HF_BEARER_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: text }),
    })

    // Check if the response from the Hugging Face API is successful
    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: `Hugging Face API request failed with status ${response.status}` },
        { status: response.status }
      )
    }

    // Parse the JSON response once and store the result
    const result = await response.json()

    // Return the summary result as JSON without re-reading the body
    return NextResponse.json({ success: true, data: result })
  } catch (error) {
    // Log and handle errors gracefully
    console.error('Error in bts-summarizer API route:', error)

    // Return a JSON response with the error message and status code 500
    return NextResponse.json(
      {
        success: false,
        error: error instanceof z.ZodError ? error.errors[0].message : 'Failed to generate summary',
      },
      { status: 500 }
    )
  }
}

/**
 * Configuration for the API route to enable Edge Runtime.
 * Edge Runtime allows for faster, more efficient responses.
 */
export const config = {
  runtime: 'edge', // This enables the route to run on the Edge Runtime
}
