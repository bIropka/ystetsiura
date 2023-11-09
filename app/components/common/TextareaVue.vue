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
      class="block w-full rounded-3xl bg-overlay px-4 leading-[56px] text-body"
    />
  </label>
</template>

<style scoped lang="css"></style>
