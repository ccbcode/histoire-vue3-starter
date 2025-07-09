<script setup>
import { ref, computed } from 'vue'
import ChevronDown from '../assets/icons/ChevronDown.vue'

const props = defineProps({
  icon: {
    type: String,
    default: '☂️'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dropdown: {
    type: Boolean,
    default: true
  },
  theme: {
    type: String,
    default: 'white'
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  showTitle: {
    type: Boolean,
    default: true
  },
  showDescription: {
    type: Boolean,
    default: true
  }
})

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}

const resolvedTheme = computed(() => {
  switch (props.theme) {
    case 'primary':
      return 'dark-primary'
    case 'secondary':
      return 'light-secondary'
    default:
      return props.theme
  }
})
</script>

<template>
  <div
    :class="[
      `theme-${resolvedTheme}`,
      'theme-base w-2/3 p-6 rounded-xl transition-all border theme-border'
    ]"
  >
    <!-- Header -->
    <div class="flex justify-between items-start gap-4">
      <!-- Left side: Icon + Text -->
      <div class="flex gap-3">
        <div v-if="showIcon" class="text-xl pt-1">{{ icon }}</div>
        <div class="space-y-2 max-w-xl">
          <h3 v-if="showTitle" class="font-semibold text-lg">{{ title }}</h3>
          <p
            v-if="showDescription && (!dropdown || isOpen)"
            class="text-sm leading-relaxed"
          >
            {{ description }}
          </p>
        </div>
      </div>

      <!-- Right side: Chevron -->
      <button
        v-if="dropdown"
        @click="toggle"
        class="transition-transform mt-1"
        :class="{ 'rotate-180': isOpen }"
      >
        <ChevronDown class="w-4 h-4 text-[color:var(--theme-text)]" />
      </button>
    </div>
  </div>
</template>

<style scoped>
button {
  transform-origin: center;
  transition: transform 0.3s ease;
}
</style>
