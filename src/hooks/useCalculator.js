import { useState } from 'react'

export default function useCalculator() {
  const [previous, setPrevious] = useState('')
  const [current, setCurrent] = useState('')
  const [operation, setOperation] = useState('')

  const isCurrentInvalid = /^$|^-?\d*\.$|^-$/.test(current)

  const pushValue = ({ target: { value } }) => {
    const conditions = {
      1: value === '0' && current === '0',
      2: value === '.' && current.includes(value),
      3: value === '.' && (!current || current === '0'),
      4: value !== '0' && current === '0',
    }

    if (conditions['1'] || conditions['2']) return

    if (conditions['3']) setCurrent('0' + value)
    else if (conditions['4']) setCurrent(value)
    else setCurrent(current + value)
  }

  const popValue = () => {
    setCurrent(current.slice(0, -1))
  }

  const allClear = () => {
    setCurrent('')
    setPrevious('')
    setOperation('')
  }

  const chooseOperation = ({ target: { value } }) => {
    if (isCurrentInvalid) return

    if (previous) {
      const result = compute()

      setPrevious(String(result))
    } else {
      setPrevious(current)
    }

    setCurrent('')
    setOperation(value)
  }

  const equals = () => {
    const result = compute()

    if (!isFinite(result)) return

    setCurrent(String(result))
    setPrevious('')
    setOperation('')
  }

  const toggleSign = () => {
    if (isCurrentInvalid) return

    const result = Number(current) * -1

    setCurrent(String(result))
  }

  const compute = () => {
    if (!current) return

    let result = 0
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
