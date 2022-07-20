import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import * as Styled from '@/components'
import { useCalculator } from '@/hooks'
import keyboard from '@/keyboard'

export default function Calculator() {
  const { themeName, toggleTheme } = useContext(ThemeContext)

  const {
    previous,
    current,
    operation,

    actions: {
      allClear,
      chooseOperation,
      equals,
      popValue,
      pushValue,
      toggleSign,
    },
  } = useCalculator()

  return (
    <Styled.Background>
      <Styled.Container>
        <Styled.Screen>
          <Styled.Previous>
            {previous} {operation}
          </Styled.Previous>

          <Styled.Current>{current}</Styled.Current>
        </Styled.Screen>

        <Styled.Button
          btnAction
          onClick={allClear}
          value={keyboard['shift+backspace'].value}
          title={keyboard['shift+backspace'].title}
        />

        <Styled.Button
          btnAction
          onClick={popValue}
          value={keyboard.backspace.value}
          title={keyboard.backspace.title}
        />

        <Styled.Button
          btnAction
          onClick={toggleSign}
          value={keyboard['shift+minus'].value}
          title={keyboard['shift+minus'].title}
        />

        <Styled.Button
          btnAction
          onClick={chooseOperation}
          value={keyboard['/'].value}
          title={keyboard['/'].title}
        />

        {['7', '8', '9'].map((number) => (
          <Styled.Button
            key={number}
            onClick={pushValue}
            value={keyboard[number].value}
            title={keyboard[number].title}
          />
        ))}

        <Styled.Button
          btnAction
          onClick={chooseOperation}
          value={keyboard['*'].value}
          title={keyboard['*'].title}
        />

        {['4', '5', '6'].map((number) => (
          <Styled.Button
            key={number}
            onClick={pushValue}
            value={keyboard[number].value}
            title={keyboard[number].title}
          />
        ))}

        <Styled.Button
          btnAction
          onClick={chooseOperation}
          value={keyboard.plus.value}
          title={keyboard.plus.title}
        />

        {['1', '2', '3'].map((number) => (
          <Styled.Button
            key={number}
            onClick={pushValue}
            value={keyboard[number].value}
            title={keyboard[number].title}
          />
        ))}

        <Styled.Button
          btnAction
          onClick={chooseOperation}
          value={keyboard.minus.value}
          title={keyboard.minus.title}
        />

        <Styled.Button
          btnAction
          onClick={pushValue}
          bottomCorner='left'
          value={keyboard['.'].value}
          title={keyboard['.'].title}
        />

        <Styled.Button
          onClick={pushValue}
          value={keyboard['0'].value}
          title={keyboard['0'].title}
        />

        <Styled.Button
          btnAction
          onClick={toggleTheme}
          value={keyboard['shift+plus'].value?.(themeName)}
          title={keyboard['shift+plus'].title}
        />

        <Styled.Button
          btnAction
          onClick={equals}
          bottomCorner='right'
          value={keyboard.enter.value}
          title={keyboard.enter.title}
        />
      </Styled.Container>
    </Styled.Background>
  )
}
