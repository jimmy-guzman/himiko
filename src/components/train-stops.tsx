import { Step, StepLabel, Stepper } from '@mui/material'

interface TrainStopsProps {
  activeStep: number
  steps: string[]
}

export const TrainStops = ({
  activeStep,
  steps,
}: TrainStopsProps): JSX.Element => {
  return (
    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}
