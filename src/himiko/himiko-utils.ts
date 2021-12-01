import { dequal } from 'dequal'

export const customEquality = (prev: unknown, next: unknown): boolean => {
  if (typeof prev === 'function' && typeof next === 'function') {
    return prev.toString() === next.toString()
  }

  return dequal(prev, next)
}
