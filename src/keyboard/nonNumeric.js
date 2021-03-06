const nonNumeric = {
  '.': {
    title: 'decimal point',
    value: '.',
  },

  '/': {
    title: 'division',
    value: 'รท',
  },

  '*': {
    title: 'multiplication',
    value: 'ร',
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
    value: 'ยฑ',
  },

  'shift+plus': {
    title: 'toggle theme (shift + plus)',
    value: (theme) => (theme === 'night' ? '๐' : '๐'),
  },
}

export default nonNumeric
