import { Checkbox, FormControlLabel } from '@mui/material'

import { CheckoutFormState } from '../checkout-model'
import { useHimiko } from '../himiko'

export const SaveAddressCheckbox = (): JSX.Element => {
  const [{ shouldSaveAddress }, handleChange] = useHimiko<CheckoutFormState>()

  return (
    <FormControlLabel
      control={
        <Checkbox
          color="secondary"
          name="shouldSaveAddress"
          value="yes"
          checked={shouldSaveAddress}
          onChange={handleChange}
        />
      }
      label="Use this address for payment details"
    />
  )
}
