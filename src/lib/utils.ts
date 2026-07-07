import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges class names using clsx and tailwind-merge.
 * Resolves Tailwind CSS class conflicts intelligently.
 *
 * @example
 * cn('px-4 py-2', condition && 'bg-red-500', 'px-6')
 * // → 'py-2 bg-red-500 px-6'  (px-4 is overridden by px-6)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
