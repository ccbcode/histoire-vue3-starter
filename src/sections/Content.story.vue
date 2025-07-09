<script setup>
import { reactive } from 'vue'
import Content from './Content.vue'

const state = reactive({
  theme: 'white',
  position: 'left',
  showContent: true,
  label: true,
  title: true,
  text: true,
  buttons: 2,
  media: true,
  mediaType: 'image'
})
</script>

<template>
  <Story title="Content" auto-props-disabled>
    <Variant title="Default">
      <template #default>
        <Content
          :theme="state.theme"
          :position="state.position"
          :showContent="state.showContent"
          :label="state.label"
          :title="state.title"
          :text="state.text"
          :buttons="state.buttons"
          :media="state.media"
          :mediaType="state.mediaType"
        />
      </template>
      <template #controls>
        <HstSelect v-model="state.theme" title="Theme" :options="['light-primary', 'dark-primary', 'white', 'light-secondary', 'dark-secondary']" />
        <HstSelect v-model="state.position" title="Position" :options="['left', 'center', 'right']" />
        <HstCheckbox v-model="state.showContent" title="Show Content" />
        <HstCheckbox v-model="state.label" title="Label" />
        <HstCheckbox v-model="state.title" title="Title" />
        <HstCheckbox v-model="state.text" title="Text" />
        <HstSelect v-model="state.buttons" title="Buttons" :options="[0, 1, 2]" />
        <HstCheckbox v-model="state.media" title="Media" />
        <HstSelect v-model="state.mediaType" title="Media Type" :options="['image', 'video']" />
      </template>
    </Variant>
  </Story>
</template>
