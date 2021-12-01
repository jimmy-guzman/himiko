import { useCallback, useMemo } from 'react'
import {
  createContext,
  useContextSelector,
  useContext,
} from 'use-context-selector'

import {
  HimikoState,
  HimikoPossibleValues,
  HimikoProviderProps,
} from './himiko-types'
import { customEquality } from './himiko-utils'
import { useHimikoState } from './use-himiko-state'

// TODO: avoid using any, create dynamic provider types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HimikoContext = createContext<any | undefined>(undefined)

HimikoContext.displayName = 'FormProvider'

export const useHimikoContext = <
  T extends HimikoPossibleValues
>(): HimikoState<T> => {
  const context = useContext(HimikoContext)

  if (context === undefined) {
    throw new Error(
      'useHimikoContext must be inside a FormProvider with a value'
    )
  }

  return context
}

export const useHimikoSelector = <T extends HimikoPossibleValues, U>(
  selector: (formState: HimikoState<T>) => U
): U => {
  const memoizedSelectorFn = useCallback(selector, [selector])

  // https://github.com/dai-shi/use-context-selector/issues/19#issuecomment-927748302
  const memoizedSelector = useMemo(() => {
    let prevValue: U | null = null

    return (state: HimikoState<T>) => {
      const nextValue = memoizedSelectorFn(state)

      if (prevValue !== null && customEquality(prevValue, nextValue)) {
        return prevValue
      }

      return (prevValue = nextValue)
    }
  }, [memoizedSelectorFn])

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const selection = useContextSelector(HimikoContext, memoizedSelector)

  return selection
}

export const useHimikoValues = <T extends HimikoPossibleValues>(): T => {
  const proxy = new Proxy({} as unknown as T, {
    get: (_target, property) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks, @typescript-eslint/no-unsafe-argument
      const selection = useContextSelector(
        // TODO: avoid using any, create dynamic provider types
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        HimikoContext,
        (state: HimikoState<T>): T[keyof T] | undefined => {
          if (typeof property === 'string') {
            return state[0][property as keyof T]
          }

          return undefined
        }
      )

      return selection
    },
  })

  return proxy
}

export const useHimiko = <T extends HimikoPossibleValues>(): HimikoState<T> => {
  const values = useHimikoValues<T>()
  const handlers = useHimikoSelector((state) => state[1])

  return [values, handlers]
}

export const HimikoProvider = <T extends HimikoPossibleValues>({
  initialState,
  children,
}: HimikoProviderProps<T>): JSX.Element => {
  const value = useHimikoState(initialState)

  return (
    <HimikoContext.Provider value={value}>{children}</HimikoContext.Provider>
  )
}
