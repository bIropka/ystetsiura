<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <Head>
    <Title>{{ title }}Iegor Stetsiura personal website</Title>
    <Meta name="description" :content="`${title}Iegor Stetsiura personal website`" />
    <Meta name="viewport" content="width=device-width, initial-scale=1.0"></Meta>
  </Head>
</template>

<style scoped lang="css"></style>
