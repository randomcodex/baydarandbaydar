import { clsx, type ClassValue } from 'clsx'

/**
 * Utility function for combining class names
 * A simpler alternative to clsx that handles conditional classes
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}
