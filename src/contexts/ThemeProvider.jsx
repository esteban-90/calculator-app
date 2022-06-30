import { ThemeProvider as Provider } from 'styled-components'
import { useTheme } from '@/hooks'

export default function ThemeProvider({ children }) {
  const { theme, themes, toggleTheme } = useTheme()

  return (
    <Provider
      theme={{ themeName: theme, themeStyle: themes[theme], toggleTheme }}
      children={children}
    />
  )
}
