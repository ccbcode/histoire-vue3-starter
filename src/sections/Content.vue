<script setup>
import { computed } from 'vue'
import Button from '../elements/Button.vue'

const props = defineProps({
  theme: { type: String, default: 'white' },
  position: { type: String, default: 'left' },
  showContent: { type: Boolean, default: true },
  label: { type: Boolean, default: true },
  title: { type: Boolean, default: true },
  text: { type: Boolean, default: true },
  buttons: { type: Number, default: 2 },
  media: { type: Boolean, default: true },
  mediaType: { type: String, default: 'image' }
})

const isCenter = computed(() => props.position === 'center')

const layoutDirection = computed(() => {
  if (props.position === 'left') return 'md:flex-row'
  if (props.position === 'right') return 'md:flex-row-reverse'
  return 'md:flex-col'
})

const alignmentClass = computed(() => {
  return isCenter.value ? 'items-center text-center' : 'items-start text-left'
})

const tagClass = computed(() => {
  return isCenter.value ? 'mx-auto' : 'self-start'
})
</script>

<template>
  <div
    :class="[
      `theme-${theme}`,
      'theme-base p-8 rounded-xl transition-all w-full'
    ]"
  >
    <div
      :class="[
        'flex flex-col gap-10 md:gap-16 md:flex',
        layoutDirection,
        alignmentClass
      ]"
    >
      <!-- Content Block -->
      <div class="w-full md:w-1/2 flex flex-col gap-4">
        <div
          v-if="label"
          class="inline-block px-3 py-1 border text-xs rounded-full theme-border"
          :class="tagClass"
        >
          Tag
        </div>

        <h1 v-if="title">This is a H1 Title in a content</h1>

        <p v-if="text">
          This is a text description that we filled with lorem ipsum to illustrate content...
        </p>

        <div
          :class="[
            'flex gap-3 mt-4 flex-wrap',
            isCenter ? 'justify-center' : ''
          ]"
        >
          <Button
            v-if="buttons >= 1"
            theme="primary"
            size="big"
          >
            Button 1
          </Button>
          <Button
            v-if="buttons >= 2"
            theme="secondary"
            size="big"
          >
            Button 2
          </Button>
        </div>
      </div>

      <!-- Media Block -->
      <div
        v-if="media"
        class="w-full md:w-1/2 aspect-video rounded-xl flex items-center justify-center theme-border text-sm opacity-70"
      >
        {{ mediaType === 'video' ? '🎥 Video' : '🖼️ Image' }}
      </div>
    </div>
  </div>
</template>
