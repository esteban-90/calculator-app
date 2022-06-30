import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import KeyBoardEventHandler from 'react-keyboard-event-handler'

import * as Styled from '@/components'
import { useCalculator } from '@/hooks'
import keys from '@/keys'

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
    <>
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
            value={keys['shift+backspace'].value}
            title={keys['shift+backspace'].title}
          />

          <Styled.Button
            btnAction
            onClick={popValue}
            value={keys.backspace.value}
            title={keys.backspace.title}
          />

          <Styled.Button
            btnAction
            onClick={toggleSign}
            value={keys['shift+minus'].value}
            title={keys['shift+minus'].title}
          />

          <Styled.Button
            btnAction
            onClick={chooseOperation}
            value={keys['/'].value}
            title={keys['/'].title}
          />

          {['7', '8', '9'].map((number) => (
            <Styled.Button
              key={number}
              onClick={pushValue}
              value={keys[number].value}
              title={keys[number].title}
            />
          ))}

          <Styled.Button
            btnAction
            onClick={chooseOperation}
            value={keys['*'].value}
            title={keys['*'].title}
          />

          {['4', '5', '6'].map((number) => (
            <Styled.Button
              key={number}
              onClick={pushValue}
              value={keys[number].value}
              title={keys[number].title}
            />
          ))}

          <Styled.Button
            btnAction
            onClick={chooseOperation}
            value={keys.plus.value}
            title={keys.plus.title}
          />

          {['1', '2', '3'].map((number) => (
            <Styled.Button
              key={number}
              onClick={pushValue}
              value={keys[number].value}
              title={keys[number].title}
            />
          ))}

          <Styled.Button
            btnAction
            onClick={chooseOperation}
            value={keys.minus.value}
            title={keys.minus.title}
          />

          <Styled.Button
            btnAction
            onClick={pushValue}
            bottomCorner='left'
            value={keys['.'].value}
            title={keys['.'].title}
          />

          <Styled.Button
            onClick={pushValue}
            value={keys['0'].value}
            title={keys['0'].title}
          />

          <Styled.Button
            btnAction
            onClick={toggleTheme}
            value={keys['shift+plus'].value(themeName)}
            title={keys['shift+plus'].title}
          />

          <Styled.Button
            btnAction
            onClick={equals}
            bottomCorner='right'
            value={keys.enter.value}
            title={keys.enter.title}
          />
        </Styled.Container>
      </Styled.Background>

      <KeyBoardEventHandler
        handleKeys={Object.keys(keys)}
        onKeyEvent={(key) => {
          const button = document.querySelector(`[title="${keys[key].title}"]`)

          console.log(button)

          button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
          button.classList.add('clicked')

          setTimeout(() => button.classList.remove('clicked'), 100)
        }}
      />
    </>
  )
}
