const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{html,js,ts,vue}'],
  safelist: [
    {
      pattern: /theme-(white|light-primary|dark-primary|light-secondary|dark-secondary)/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'ui-serif', 'serif'],
        mono: ['SFMono-Regular', 'ui-monospace', 'monospace'],
        poppins: ['Poppins', 'sans-serif']
      }, 
      colors: {
        theme: {
          white: {
            bg: '#ffffff',
            text: '#000000',
            border: '#e5e7eb',
          },
          'light-primary': {
            bg: '#e0f2fe',
            text: '#1e3a8a',
            border: '#bae6fd',
          },
          'dark-primary': {
            bg: '#1e3a8a',
            text: '#ffffff',
            border: '#1e40af',
          },
          'light-secondary': {
            bg: '#fce7f3',
            text: '#831843',
            border: '#fbcfe8',
          },
          'dark-secondary': {
            bg: '#831843',
            text: '#ffffff',
            border: '#9d174d',
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const themes = theme('colors.theme')
      const components = {}

      for (const [name, tokens] of Object.entries(themes)) {
        if (tokens?.bg && tokens?.text && tokens?.border) {
          components[`.theme-${name}`] = {
            '--theme-bg': tokens.bg,
            '--theme-text': tokens.text,
            '--theme-border': tokens.border,
          }
        }
      }

      addComponents(components)
    }),
  ],
}