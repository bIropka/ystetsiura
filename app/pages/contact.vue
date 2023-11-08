<script setup lang="ts">
import { SectionTitle } from '~/components/common'
import FormContact from '~/components/forms/FormContact.vue'
import CustomHead from '~/components/layout/CustomHead.vue'
</script>

<template>
  <div>
    <CustomHead :title="'Get in touch - '" />
    <SectionTitle title="Get in touch" />
    <FormContact />
  </div>
</template>

<style scoped lang="css"></style>
