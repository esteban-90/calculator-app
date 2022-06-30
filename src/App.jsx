import { ThemeProvider } from '@/contexts'
import { GlobalStyle } from '@/styles'
import { Calculator } from '@/views'

export default function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Calculator />
    </ThemeProvider>
  )
}
