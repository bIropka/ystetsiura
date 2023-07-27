<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'text',
  },
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
  inputClasses: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <label :class="labelClasses">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      class="block w-full h-14 leading-[56px] px-4 text-body bg-overlay rounded-3xl"
      :class="inputClasses"
    />
  </label>
</template>

<style scoped lang="css"></style>
