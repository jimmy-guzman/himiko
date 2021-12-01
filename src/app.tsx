import { Checkout } from './checkout'
import { AppHeader } from './components'
import { MuiProvider } from './providers'

export const App = (): JSX.Element => {
  return (
    <MuiProvider>
      <AppHeader />
      <Checkout />
    </MuiProvider>
  )
}
