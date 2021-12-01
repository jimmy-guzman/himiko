import { useState } from 'react'

import {
  HimikoChangeHandler,
  HimikoState,
  HimikoPossibleValues,
} from './himiko-types'

export const useHimikoState = <T extends HimikoPossibleValues>(
  initialState: T
): HimikoState<T> => {
  const [formState, setFormState] = useState<T>(() => initialState)

  const handleChange: HimikoChangeHandler = (event) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      }
    })
  }

  return [formState, handleChange]
}
