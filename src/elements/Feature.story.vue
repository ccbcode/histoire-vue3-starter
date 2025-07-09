<script setup>
import { reactive } from 'vue'
import Feature from './Feature.vue'

const state = reactive({
  theme: 'white',
  dropdown: true,
})
</script>

<template>
  <Story title="Feature" auto-props-disabled>
    <Variant title="Default">
      <template #default>
        <div class="space-y-4 max-w-2xl mx-auto">
          <Feature
            v-for="(feature, index) in features"
            :key="index"
            :theme="state.theme"
            :dropdown="state.dropdown"
            :title="feature.title"
            :description="feature.description"
            :icon="feature.icon"
          />
        </div>
      </template>

      <template #controls>
        <HstSelect
          v-model="state.theme"
          title="Theme"
          :options="['white', 'dark-primary']"
        />
        <HstCheckbox
          v-model="state.dropdown"
          title="Dropdown"
        />
      </template>
    </Variant>
  </Story>
</template>

<script>
const features = [
  {
    title: 'Souscription simplifiée et en ligne',
    description: 'Votre client a envie d’évoluer vers une nouvelle pratique ? Ce contrat est le plus complet du marché.',
    icon: '☂️'
  },
  {
    title: 'Gestion des contrats facilitée',
    description: 'Tous vos contrats accessibles en ligne, avec une gestion simplifiée.',
    icon: '👮‍♂️'
  },
  {
    title: 'Outils d’aide à la vente',
    description: 'Profitez de supports commerciaux automatisés pour maximiser votre efficacité.',
    icon: '🦀'
  }
]
</script>
