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
            text: '#170B3D',
            border: '#170B3D',
            hover: '#FF6666',
            hoverText: '#ffffff',
            hoverBorder: '#FF6666',
            disabled: '#EEF0F7',
            disabledText: '#A9A9C4',
            disabledBorder: '#EEF0F7',
          },
          'light-primary': {
            bg: '#FEF5F5',
            text: '#170B3D',
            border: '#bae6fd',
          },
          'dark-primary': {
            bg: '#FF6666',
            text: '#ffffff',
            border: '#FF6666',
            hover: '#170B3D',
            hoverText: '#ffffff',
            hoverBorder: '#170B3D',
            disabled: '#EEF0F7',
            disabledText: '#A9A9C4',
            disabledBorder: '#EEF0F7',
          },
          'light-secondary': {
            bg: '#F9FAFC',
            text: '#170B3D',
            border: '#F9FAFC',
          },
          'dark-secondary': {
            bg: '#170B3D',
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
            '--theme-hover': tokens.hover,
            '--theme-hoverText': tokens.hoverText,
            '--theme-hoverBorder': tokens.hoverBorder,
            '--theme-disabled': tokens.disabled,
            '--theme-disabledBorder': tokens.disabledBorder,
          }
        }
      }

      addComponents(components)
    }),
  ],
}