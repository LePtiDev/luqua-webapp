<script setup lang="ts">
// Composant
import DefaultLayout from '~/layouts/defaultLayout.vue'
import SidebarLayout from '~/layouts/sidebarLayout.vue'

// Composables
const route = useRoute()

// Computed
const layout = computed(() => {
  switch (route.meta.layout) {
    case 'default':
      return DefaultLayout
    case 'sidebar':
      return SidebarLayout
    default:
      return DefaultLayout
  }
})
</script>
<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
