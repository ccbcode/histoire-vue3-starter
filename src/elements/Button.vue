<script setup>
import { computed } from 'vue'

const props = defineProps({
  theme: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'big'
  },
  icon: {
    type: Boolean,
    default: false
  },
  state: {
    type: String,
    default: 'default'
  }
})

const resolvedTheme = computed(() => {
  switch (props.theme) {
    case 'primary':
      return 'dark-primary'
    case 'secondary':
      return 'white'
    default:
      return props.theme
  }
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'small':
      return 'px-3 py-1 text-sm'
    case 'big':
      return 'px-5 py-2 text-base'
    default:
      return ''
  }
})

const overrideStyle = computed(() => {
  switch (props.state) {
    case 'hover':
      return {
        backgroundColor: 'var(--theme-hover)',
        color: 'var(--theme-hoverText)',
        borderColor: 'var(--theme-hoverBorder)'
      }
    case 'disabled':
      return {
        backgroundColor: 'var(--theme-disabled)',
        color: 'var(--theme-disabledText)',
        borderColor: 'var(--theme-disabledBorder)',
        cursor: 'not-allowed',
        pointerEvents: 'none'
      }
    default:
      return null // Don't apply inline style in default state
  }
})
</script>

<template>
  <button
    :class="[
      `theme-${resolvedTheme}`,
      'theme-base rounded font-semibold flex items-center gap-2 border transition-colors duration-200',
      sizeClass
    ]"
    :style="overrideStyle ?? undefined"
    :disabled="state === 'disabled'"
  >
    <slot name="icon" v-if="icon" />
    <slot />
  </button>
</template>

<style scoped>
button {
  position: relative;
  overflow: hidden;
  z-index: 0;
}

/* Slanted background layer */
button::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: var(--theme-hover);
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
  transform: translateX(-100%);
  transition: transform 0.4s ease-in-out;
  z-index: -1;
}

/* Slide in on hover (only for enabled/default) */
button:enabled:hover::before {
  transform: translateX(0);
}

button:hover::before {
  transform: translateX(0);
}

/* Ensure text sits above */
button > * {
  position: relative;
  z-index: 1;
}

/* Text color transition */
button:enabled {
  transition: color 0.4s ease-in-out;
}

button:enabled:hover {
  color: var(--theme-hoverText);
}
</style>
