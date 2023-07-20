<script setup lang="ts">
defineProps({
  placeholder: {
    type: String,
    default: 'Placeholder',
  },
  value: {
    type: String,
    default: '',
  },
  labelClasses: {
    type: String,
    default: '',
  },
  textareaClasses: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <label :class="labelClasses">
    <textarea
      :placeholder="placeholder"
      :class="textareaClasses"
      :value="value"
      class="block w-full leading-[56px] px-4 text-body bg-overlay rounded-3xl"
    />
  </label>
</template>

<style scoped lang="css"></style>
