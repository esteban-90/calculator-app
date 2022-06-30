import useLocalStorage from 'use-local-storage'

export default function useTheme() {
  const day = 'day'
  const night = 'night'

  const initialTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? night
    : day

  const [theme, setTheme] = useLocalStorage('calculatorTheme', initialTheme)

  const toggleTheme = () => {
    setTheme((previous) => (previous === day ? night : day))
  }

  const themes = {
    [day]: {
      background: {
        start: 'rgb(86, 204, 242)',
        end: 'rgb(47, 128, 237)',
      },

      button: {
        action: 'rgb(135, 206, 235)',
        number: 'rgb(207, 232, 251)',
      },
    },

    [night]: {
      background: {
        start: 'rgb(105, 105, 105)',
        end: 'rgb(0, 0, 0)',
      },

      button: {
        action: 'rgb(128, 128, 128)',
        number: 'rgb(204, 204, 204)',
      },
    },
  }

  return { theme, themes, toggleTheme }
}
