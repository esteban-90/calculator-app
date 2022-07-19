const nonNumeric = {
  '.': {
    title: 'decimal point',
    value: '.',
  },

  '/': {
    title: 'division',
    value: '÷',
  },

  '*': {
    title: 'multiplication',
    value: '×',
  },

  minus: {
    title: 'subtraction',
    value: '-',
  },

  plus: {
    title: 'addition',
    value: '+',
  },

  backspace: {
    title: 'clear entry (backspace / delete)',
    value: 'CE',
  },

  delete: {
    title: 'clear entry (backspace / delete)',
  },

  enter: {
    title: 'equals',
    value: '=',
  },

  'shift+backspace': {
    title: 'all clear (shift + backspace)',
    value: 'AC',
  },

  'shift+minus': {
    title: 'toggle sign (shift + minus)',
    value: '±',
  },

  'shift+plus': {
    title: 'toggle theme (shift + plus)',
    value: (theme) => (theme === 'night' ? '🌞' : '🌚'),
  },
}

export default nonNumeric
