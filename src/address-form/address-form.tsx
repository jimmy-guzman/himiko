import { Checkbox, FormControlLabel, Grid, Typography } from '@mui/material'

import { AddressInputs } from './address-inputs'
import { NameInputs } from './name-inputs'

export const AddressForm = (): JSX.Element => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <NameInputs />
        <AddressInputs />
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </>
  )
}
