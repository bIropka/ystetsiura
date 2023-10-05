<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="wrapper">
    <span v-if="title" class="text">
      {{ title }}
    </span>
  </div>
</template>

<style scoped lang="css">
.wrapper {
  @apply mb-8 h-auto w-full overflow-hidden font-poppins font-bold uppercase text-text-heading;
}
.text {
  @apply tracking-xxl relative inline-block;
}
.text:after {
  @apply absolute left-full top-2/4 ml-8 h-px w-[5000px] bg-text-basic content-[''];
}
</style>
