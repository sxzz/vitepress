<script setup lang="ts" vapor>
import { useData } from '../composables/data'
import VPFeatures from './VPFeatures.vue'

const { frontmatter: fm } = useData()
</script>

<template>
  <VPFeatures
    v-if="fm.features"
    class="VPHomeFeatures"
    :features="fm.features"
  />
</template>
