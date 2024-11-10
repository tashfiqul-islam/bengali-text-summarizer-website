import { z } from 'zod'
import { APIError } from './errors'

/**
 * Validates input data against a Zod schema
 * @param schema - The Zod schema to validate against
 * @param data - The data to validate
 * @returns The validated data
 * @throws APIError if validation fails
 */
export function validateInput<T>(schema: z.Schema<T>, data: unknown): T {
  try {
    return schema.parse(data)
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new APIError(error.errors[0].message, 400)
    }
    throw new APIError('Invalid input', 400)
  }
}
