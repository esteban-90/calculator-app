import { ThemeProvider } from '@/contexts'
import { KeyboardListener } from '@/listeners'
import { GlobalStyle } from '@/styles'
import { Calculator } from '@/views'

export default function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Calculator />
      <KeyboardListener />
    </ThemeProvider>
  )
}
