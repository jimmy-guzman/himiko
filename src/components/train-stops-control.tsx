import { Box, Button } from '@mui/material'

interface TrainStopsControlProps {
  activeStep: number
  handleBack: () => void
  handleNext: () => void
  steps: string[]
}

export const TrainStopsControl = ({
  activeStep,
  handleBack,
  handleNext,
  steps,
}: TrainStopsControlProps): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      {activeStep !== 0 && (
        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>
      )}
      <Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
        {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
      </Button>
    </Box>
  )
}
