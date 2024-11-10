import { APIError } from './errors'

const HF_API_ENDPOINT = process.env.HF_API_ENDPOINT
const HF_BEARER_TOKEN = process.env.HF_BEARER_TOKEN

if (!HF_API_ENDPOINT || !HF_BEARER_TOKEN) {
  throw new Error('Missing Hugging Face API configuration')
}

/**
 * Sends a request to the Hugging Face Inference API for text summarization
 * @param text - The text to be summarized
 * @returns Promise<string> - The summarized text
 * @throws APIError if the API request fails or returns an invalid response
 */
export async function summarize(text: string): Promise<string> {
  // Ensure HF_API_ENDPOINT is defined as a string
  if (!HF_API_ENDPOINT) {
    throw new APIError('Hugging Face API endpoint is not configured', 500)
  }

  try {
    const response = await fetch(HF_API_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${HF_BEARER_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: text }),
    })

    if (!response.ok) {
      throw new APIError(
        `Hugging Face API request failed with status ${response.status}`,
        response.status
      )
    }

    const result = await response.json()

    // Adjust for potential variations in response structure
    const summary = Array.isArray(result) ? result[0]?.summary_text : result?.summary_text

    if (typeof summary !== 'string') {
      throw new APIError('Invalid response from Hugging Face API', 500)
    }

    return summary
  } catch (error) {
    console.error('Error in summarize function:', error)
    if (error instanceof APIError) {
      throw error
    }
    throw new APIError('Failed to generate summary', 500)
  }
}
