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
      `theme-${theme}`,
      'theme-base',
      'flex flex-wrap items-center gap-6 p-8 rounded-xl transition-all',
      positionClass
    ]"
  >
    <!-- Media Block -->
    <div
      v-if="media"
      class="w-full md:w-1/2 aspect-video rounded-xl flex items-center justify-center theme-border"
    >
      <div class="text-sm opacity-70">
        {{ mediaType === 'video' ? '🎥 Video' : '🖼️ Image' }}
      </div>
    </div>

    <!-- Text Block -->
    <div v-if="showContent" class="w-full md:w-1/2 space-y-4 text-left">
      <div
        v-if="label"
        class="inline-block px-3 py-1 border text-xs rounded-full theme-border"
      >
        Tag
      </div>

      <h1 v-if="title">
        This is a H1 Title in a content
      </h1>

      <p v-if="text">
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
          class="border px-4 py-2 rounded font-semibold theme-button-secondary"
        >
          Button 2
        </button>
      </div>
    </div>
  </div>
</template>
