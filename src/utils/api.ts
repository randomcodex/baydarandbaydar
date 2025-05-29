import { env } from '../config'

// API Error class
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public data?: any,
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

// API Response type
export interface ApiResponse<T = any> {
  data: T
  message?: string
  success: boolean
}

// HTTP Methods
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

// Request options
interface RequestOptions {
  method?: HttpMethod
  headers?: Record<string, string>
  body?: any
  timeout?: number
}

// Default headers
const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

// Main API function
export const api = async <T = any>(
  endpoint: string,
  options: RequestOptions = {},
): Promise<ApiResponse<T>> => {
  const { method = 'GET', headers = {}, body, timeout = 10000 } = options

  const url = `${env.API_BASE_URL}${endpoint}`

  const config: RequestInit = {
    method,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
  }

  // Add body for non-GET requests
  if (body && method !== 'GET') {
    config.body = JSON.stringify(body)
  }

  // Create abort controller for timeout
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)
  config.signal = controller.signal

  try {
    const response = await fetch(url, config)
    clearTimeout(timeoutId)

    if (!response.ok) {
      let errorMessage = `HTTP ${response.status}: ${response.statusText}`
      let errorData

      try {
        errorData = await response.json()
        errorMessage = errorData.message || errorMessage
      } catch {
        // Response is not JSON, use status text
      }

      throw new ApiError(errorMessage, response.status, errorData)
    }

    const data = await response.json()
    return data
  } catch (error) {
    clearTimeout(timeoutId)

    if (error instanceof ApiError) {
      throw error
    }

    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new ApiError('Request timeout', 408)
    }

    throw new ApiError(error instanceof Error ? error.message : 'Network error', 0)
  }
}

// Helper functions for common HTTP methods
export const apiGet = <T = any>(endpoint: string, headers?: Record<string, string>) =>
  api<T>(endpoint, { method: 'GET', headers })

export const apiPost = <T = any>(endpoint: string, body?: any, headers?: Record<string, string>) =>
  api<T>(endpoint, { method: 'POST', body, headers })

export const apiPut = <T = any>(endpoint: string, body?: any, headers?: Record<string, string>) =>
  api<T>(endpoint, { method: 'PUT', body, headers })

export const apiDelete = <T = any>(endpoint: string, headers?: Record<string, string>) =>
  api<T>(endpoint, { method: 'DELETE', headers })

export const apiPatch = <T = any>(endpoint: string, body?: any, headers?: Record<string, string>) =>
  api<T>(endpoint, { method: 'PATCH', body, headers })
