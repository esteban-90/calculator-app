import KeyboardEventHandler from 'react-keyboard-event-handler'
import keyboard from '@/keyboard'

export default function KeyboardListener() {
  return (
    <KeyboardEventHandler
      handleKeys={Object.keys(keyboard)}
      onKeyEvent={(key) => {
        const button = document.querySelector(
          `[title="${keyboard[key].title}"]`
        )

        button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        button.classList.add('clicked')

        setTimeout(() => button.classList.remove('clicked'), 100)
      }}
    />
  )
}
