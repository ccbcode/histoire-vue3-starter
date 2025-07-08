<script setup>
import { computed } from 'vue'

const props = defineProps({
  theme: {
    type: String,
    default: 'white'
  },
  position: {
    type: String,
    default: 'right'
  },
  showContent: {
    type: Boolean,
    default: true
  },
  label: {
    type: Boolean,
    default: true
  },
  title: {
    type: Boolean,
    default: true
  },
  text: {
    type: Boolean,
    default: true
  },
  buttons: {
    type: Number,
    default: 2
  },
  media: {
    type: Boolean,
    default: true
  },
  mediaType: {
    type: String,
    default: 'image'
  }
})

const themeClass = computed(() => {
  switch (props.theme) {
    case 'light-primary': return 'bg-blue-50 text-blue-900'
    case 'dark-primary': return 'bg-blue-900 text-white'
    case 'white': return 'bg-white text-black'
    case 'light-secondary': return 'bg-pink-50 text-pink-900'
    case 'dark-secondary': return 'bg-pink-900 text-white'
    default: return ''
  }
})

const positionClass = computed(() => {
  switch (props.position) {
    case 'left': return 'justify-start'
    case 'center': return 'justify-center'
    case 'right': return 'justify-end'
    default: return ''
  }
})
</script>



<template>
  <div
    :class="[
      'flex flex-wrap items-center gap-6 p-8 rounded-xl transition-all',
      positionClass,
      themeClass
    ]"
  >
    <!-- Media Block -->
    <div
      v-if="media"
      class="w-full md:w-1/2 aspect-video bg-blue-100 rounded-xl flex items-center justify-center"
    >
      <div class="text-sm text-blue-300">
        {{ mediaType === 'video' ? '🎥 Video' : '🖼️ Image' }}
      </div>
    </div>

    <!-- Text Block -->
    <div v-if="showContent" class="w-full md:w-1/2 space-y-4 text-left">
      <div v-if="label" class="inline-block px-3 py-1 border text-xs rounded-full">
        Tag
      </div>

      <h2 v-if="title" class="text-xl font-bold text-gray-900 dark:text-white">
        This is a H1 Title in a content
      </h2>

      <p v-if="text" class="text-sm text-gray-600 dark:text-gray-300">
        This is a text description that we filled with lorem ipsum to illustrate content...
      </p>

      <div class="flex gap-3 mt-4">
        <button
          v-if="buttons >= 1"
          class="bg-rose-500 text-white px-4 py-2 rounded font-semibold"
        >
          Button 1
        </button>
        <button
          v-if="buttons >= 2"
          class="border border-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded font-semibold"
        >
          Button 2
        </button>
      </div>
    </div>
  </div>
</template>
