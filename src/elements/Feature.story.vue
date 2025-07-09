<script setup>
import { reactive } from 'vue'
import Feature from './Feature.vue'

const state = reactive({
  theme: 'secondary',
  dropdown: true,
  showIcon: true,
  showTitle: true,
  showDescription: true,
  count: 1
})
</script>

<template>
  <Story title="Feature" auto-props-disabled>
    <Variant title="Default">
      <template #default>
        <div class="space-y-4">
          <Feature
            v-for="n in state.count"
            :key="n"
            icon="☂️"
            title="Expertise sur les risques complexes"
            description="Votre client a envie d’évoluer vers une nouvelle pratique ? Ce contrat est le plus complet du marché. Votre client a envie d’évoluer vers une nouvelle pratique ?"
            :theme="state.theme"
            :dropdown="state.dropdown"
            :showIcon="state.showIcon"
            :showTitle="state.showTitle"
            :showDescription="state.showDescription"
          />
        </div>
      </template>

      <template #controls>
        <HstSelect v-model="state.theme" title="Theme" :options="['primary', 'secondary']" />
        <HstCheckbox v-model="state.dropdown" title="Dropdown" />
        <HstCheckbox v-model="state.showIcon" title="Show Icon" />
        <HstCheckbox v-model="state.showTitle" title="Show Title" />
        <HstCheckbox v-model="state.showDescription" title="Show Description" />
        <HstSelect v-model="state.count" title="Count" :options="[1, 2, 3]" />
      </template>
    </Variant>
  </Story>
</template>
