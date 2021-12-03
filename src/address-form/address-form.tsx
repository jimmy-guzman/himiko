import { Grid, Typography } from '@mui/material'

import { AddressInputs } from './address-inputs'
import { NameInputs } from './name-inputs'
import { SaveAddressCheckbox } from './save-address-checkbox'

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
          <SaveAddressCheckbox />
        </Grid>
      </Grid>
    </>
  )
}
