import { Paper, Container, Typography } from '@mui/material'
import { useState } from 'react'

import { AddressForm } from './address-form'
import { checkoutInitialState } from './checkout-model'
import { Copyright, TrainStops, TrainStopsControl } from './components'
import { HimikoProvider } from './himiko'
import { PaymentForm } from './payment-form'
import { Review } from './review'

const steps = ['Shipping address', 'Payment details', 'Review your order']

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddressForm />
    case 1:
      return <PaymentForm />
    case 2:
      return <Review />
    default:
      throw new Error('Unknown step')
  }
}

export const Checkout = (): JSX.Element => {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        // eslint-disable-next-line id-length
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          Checkout
        </Typography>
        <TrainStops activeStep={activeStep} steps={steps} />
        {activeStep === steps.length ? (
          <>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order
              confirmation, and will send you an update when your order has
              shipped.
            </Typography>
          </>
        ) : (
          <>
            <HimikoProvider initialState={checkoutInitialState}>
              {getStepContent(activeStep)}
            </HimikoProvider>
            <TrainStopsControl
              activeStep={activeStep}
              handleBack={handleBack}
              handleNext={handleNext}
              steps={steps}
            />
          </>
        )}
      </Paper>
      <Copyright />
    </Container>
  )
}
