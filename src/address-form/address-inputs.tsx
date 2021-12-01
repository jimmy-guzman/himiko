import { Grid, TextField } from '@mui/material'

import { CheckoutFormState } from '../checkout-model'
import { useHimiko } from '../himiko'

// eslint-disable-next-line max-lines-per-function
export const AddressInputs = (): JSX.Element => {
  const [formValues, handleChange] = useHimiko<CheckoutFormState>()

  return (
    <>
      <Grid item xs={12}>
        <TextField
          required
          id="address1"
          name="address1"
          label="Address line 1"
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
          value={formValues.address1}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="address2"
          name="address2"
          label="Address line 2"
          fullWidth
          autoComplete="shipping address-line2"
          variant="standard"
          value={formValues.address2}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="city"
          name="city"
          label="City"
          fullWidth
          autoComplete="shipping address-level2"
          variant="standard"
          value={formValues.city}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="state"
          name="state"
          label="State/Province/Region"
          fullWidth
          variant="standard"
          value={formValues.state}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="zip"
          name="zip"
          label="Zip / Postal code"
          fullWidth
          autoComplete="shipping postal-code"
          variant="standard"
          value={formValues.zip}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="country"
          name="country"
          label="Country"
          fullWidth
          autoComplete="shipping country"
          variant="standard"
          value={formValues.country}
          onChange={handleChange}
        />
      </Grid>
    </>
  )
}
