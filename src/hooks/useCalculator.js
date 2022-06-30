import { useState } from 'react'

export default function useCalculator() {
  const [previous, setPrevious] = useState('')
  const [current, setCurrent] = useState('')
  const [operation, setOperation] = useState('')

  const pushValue = ({ target: { value: incomingValue } }) => {
    const _current = String(current)

    if (
      (incomingValue === '0' && _current === '0') ||
      (incomingValue === '.' && _current.includes(incomingValue))
    )
      return

    if (incomingValue === '.' && (!_current || _current === '0')) {
      setCurrent('0' + incomingValue)
    } else if (incomingValue !== '0' && _current === '0') {
      setCurrent(incomingValue)
    } else {
      setCurrent(current + incomingValue)
    }
  }

  const popValue = () => {
    setCurrent(String(current).slice(0, -1))
  }

  const allClear = () => {
    setCurrent('')
    setPrevious('')
    setOperation('')
  }

  const chooseOperation = ({ target: { value } }) => {
    if (/^$|^-?\d*\.$|^-$/.test(current)) return

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

    if (!isFinite(result)) return

    setCurrent(result)
    setPrevious('')
    setOperation('')
  }

  const toggleSign = () => {
    if (/^$|^-?\d*\.$|^-$/.test(current)) return
    setCurrent(-current)
  }

  const compute = () => {
    if (!current) return

    let result
    const previousNumber = Number(previous)
    const currentNumber = Number(current)

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
