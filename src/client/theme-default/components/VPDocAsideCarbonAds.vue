<script setup lang="ts">
// import { defineAsyncComponent } from 'vue'
import type { DefaultTheme } from 'vitepress/theme'
import VPCarbonAdsVue from './VPCarbonAds.vue'

defineProps<{
  carbonAds: DefaultTheme.CarbonAdsOptions
}>()

const VPCarbonAds = __CARBON__
  ? VPCarbonAdsVue
  : () => null
</script>

<template>
  <div class="VPDocAsideCarbonAds">
    <VPCarbonAds :carbon-ads="carbonAds" />
  </div>
</template>
