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
      class="block h-14 w-full rounded-3xl bg-overlay px-4 leading-[56px] text-body"
      :class="inputClasses"
    />
  </label>
</template>

<style scoped lang="css"></style>
