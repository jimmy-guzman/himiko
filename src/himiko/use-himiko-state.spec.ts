import { renderHook, act } from '@testing-library/react-hooks'

import { HimikoChangeEvent } from '.'
import { useHimikoState } from './use-himiko-state'

describe('useHimikoState', () => {
  it('should return default state', () => {
    const { result } = renderHook(() =>
      useHimikoState({ banana: 'yellow', orange: 'orange' })
    )

    expect(result.current[0]).toStrictEqual({
      banana: 'yellow',
      orange: 'orange',
    })
    expect(typeof result.current[1]).toBe('function')
  })

  it('should update state by value and name', () => {
    const { result } = renderHook(() => useHimikoState({ banana: 'yellow' }))

    expect(result.current[0].banana).toBe('yellow')

    act(() => {
      result.current[1]({
        target: {
          name: 'banana',
          value: 'brown',
        },
      } as HimikoChangeEvent)
    })

    expect(result.current[0].banana).toBe('brown')
  })
  it('should update state by checked and name', () => {
    const { result } = renderHook(() => useHimikoState({ isYellow: false }))

    expect(result.current[0].isYellow).toBe(false)

    act(() => {
      result.current[1]({
        target: {
          name: 'isYellow',
          checked: true,
        },
      } as HimikoChangeEvent)
    })

    expect(result.current[0].isYellow).toBe(true)
  })
})
