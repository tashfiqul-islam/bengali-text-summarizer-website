/**
 * Custom error class for API-related errors
 */
export class APIError extends Error {
  constructor(message: string, public statusCode: number, public isOperational = true) {
    super(message)
    this.name = 'APIError'
    Error.captureStackTrace(this, this.constructor)
  }
}
