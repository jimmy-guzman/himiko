import { Grid, TextField } from '@mui/material'

import { CheckoutFormState } from '../checkout-model'
import { useHimikoSelector, useHimikoValues } from '../himiko'

export const NameInputs = (): JSX.Element => {
  const handleChange = useHimikoSelector((state) => state[1])
  const { firstName, lastName } = useHimikoValues<CheckoutFormState>()

  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="firstName"
          name="firstName"
          label="First name"
          fullWidth
          autoComplete="given-name"
          variant="standard"
          value={firstName}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="lastName"
          name="lastName"
          label="Last name"
          fullWidth
          autoComplete="family-name"
          variant="standard"
          value={lastName}
          onChange={handleChange}
        />
      </Grid>
    </>
  )
}
