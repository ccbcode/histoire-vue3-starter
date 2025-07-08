<script setup>
import { reactive } from 'vue'
import Button from './Button.vue'

const state = reactive({
  theme: 'primary',
  size: 'big',
  icon: true,
  state: 'default',
})
</script>

<template>
  <Story title="Button" auto-props-disabled>
    <Variant title="Default">
      <template #default>
        <Button
          :theme="state.theme"
          :size="state.size"
          :icon="state.icon"
          :state="state.state"
        >
          Click me
        </Button>
      </template>

      <template #controls>
        <HstSelect v-model="state.theme" title="Theme" :options="['primary', 'secondary']" />
        <HstSelect v-model="state.size" title="Size" :options="['big', 'small']" />
        <HstCheckbox v-model="state.icon" title="Icon" />
        <HstSelect v-model="state.state" title="State" :options="['default', 'hover', 'disabled']" />
      </template>
    </Variant>
  </Story>
</template>
