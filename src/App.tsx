import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { DefaultsLayout } from './layouts/DefaultLayouts'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultsLayout />
      <GlobalStyle />
    </ThemeProvider>
  )
}
