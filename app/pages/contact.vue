<script setup lang="ts">
import { PageTitle } from '~/components/common'
import FormContact from '~/components/forms/FormContact.vue'
import CustomHead from '~/components/layout/CustomHead.vue'
</script>

<template>
  <div>
    <CustomHead :title="'Contact - '" />
    <PageTitle text="Contact" />
    <FormContact />
  </div>
</template>

<style scoped lang="css"></style>
