<script setup lang="ts">
import { computed } from 'vue'
import * as icons from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    name: keyof typeof icons
    size?: number
    strokeWidth?: number
    defaultClass?: string
  }>(),
  {
    strokeWidth: 2
  }
)

const icon = computed(() => icons[props.name])
</script>

<template>
  <component :is="icon" :size="size" :stroke-width="strokeWidth" :default-class="defaultClass" />
</template>
