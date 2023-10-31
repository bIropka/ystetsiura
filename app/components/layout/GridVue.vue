<script setup lang="ts">
const props = defineProps<{
  classes?: string
  isWrapper?: boolean
  cols?: string
}>()

const gridClass = computed(() => (props.cols ? `grid grid-cols-${props.cols}` : undefined))
</script>

<template>
  <div
    class="h-full w-full"
    :class="[isWrapper && 'mx-auto flex max-w-ultra-full-hd', classes, gridClass]"
  >
    <slot />
  </div>
</template>

<style scoped lang="css"></style>
