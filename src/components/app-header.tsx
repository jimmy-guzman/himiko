import { AppBar, Theme, Toolbar, Typography } from '@mui/material'

export const AppHeader = (): JSX.Element => {
  return (
    <AppBar
      position="absolute"
      color="default"
      elevation={0}
      sx={{
        position: 'relative',
        borderBottom: (theme: Theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Company name
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
