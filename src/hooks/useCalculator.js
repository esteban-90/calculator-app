import { useState } from 'react'
import { compose, isInfinite, isInvalid, numberify, stringify } from '@/utils'

export default function useCalculator() {
  const [previous, setPrevious] = useState('')
  const [current, setCurrent] = useState('')
  const [operation, setOperation] = useState('')

  const pushValue = ({ target: { value } }) => {
    const _current = stringify(current)

    if (
      (value === '0' && _current === '0') ||
      (value === '.' && _current.includes(value))
    )
      return

    if (value === '.' && (!_current || _current === '0')) {
      setCurrent('0' + value)
    } else if (value !== '0' && _current === '0') {
      setCurrent(value)
    } else {
      setCurrent(_current + value)
    }
  }

  const popValue = () => {
    setCurrent(stringify(current).slice(0, -1))
  }

  const allClear = () => {
    setCurrent('')
    setPrevious('')
    setOperation('')
  }

  const chooseOperation = ({ target: { value } }) => {
    if (isInvalid(current)) return

    if (previous) {
      const result = compute()

      setPrevious(result)
    } else {
      setPrevious(current)
    }

    setCurrent('')
    setOperation(value)
  }

  const equals = () => {
    const result = compute()

    if (isInfinite(result)) return

    compose(setCurrent, stringify)(result)
    setPrevious('')
    setOperation('')
  }

  const toggleSign = () => {
    if (isInvalid(current)) return

    compose(setCurrent, stringify)(numberify(current) * -1)
  }

  const compute = () => {
    if (!current) return

    let result = 0
    const previousNumber = numberify(previous)
    const currentNumber = numberify(current)

    switch (operation) {
      case '÷':
        result = previousNumber / currentNumber
        break
      case '×':
        result = previousNumber * currentNumber
        break
      case '+':
        result = previousNumber + currentNumber
        break
      case '-':
        result = previousNumber - currentNumber
        break
      default:
        break
    }

    return result
  }

  const actions = {
    pushValue,
    popValue,
    allClear,
    chooseOperation,
    equals,
    toggleSign,
  }

  return { previous, current, operation, actions }
}
