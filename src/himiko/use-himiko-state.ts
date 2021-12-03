import { useState } from 'react'

import {
  HimikoChangeHandler,
  HimikoState,
  HimikoPossibleValues,
  HimikoChangeEvent,
} from './himiko-types'

const isCheckbox = (
  event: HimikoChangeEvent
): event is React.ChangeEvent<HTMLInputElement> => {
  return Object.prototype.hasOwnProperty.call(event.target, 'checked')
}

export const useHimikoState = <T extends HimikoPossibleValues>(
  initialState: T
): HimikoState<T> => {
  const [formState, setFormState] = useState<T>(() => initialState)

  const handleChange: HimikoChangeHandler = (event) => {
    setFormState((prevState) => {
      if (isCheckbox(event)) {
        return {
          ...prevState,
          [event.target.name]: event.target.checked,
        }
      }
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      }
    })
  }

  return [formState, handleChange]
}
