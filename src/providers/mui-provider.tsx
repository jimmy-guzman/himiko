import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme()

interface MuiProviderProps {
  children: React.ReactNode
}

export const MuiProvider = ({ children }: MuiProviderProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
