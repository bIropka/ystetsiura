<script setup lang="ts">
defineProps<{
  classes?: string
}>()
</script>

<template>
  <div
    class="max-w-ultra-full-hd 3xl:px-16 mx-auto h-full w-full px-0"
    :class="`${classes ? classes : ''}`"
  >
    <slot />
  </div>
</template>

<style scoped lang="css"></style>
