<script setup lang="ts">
import Header from '~/components/layout/HeaderVue.vue'
import Navigation from '~/components/layout/NavigationVue.vue'
import Content from '~/components/layout/ContentVue.vue'
</script>

<template>
  <body class="bg-dark">
    <Header />
    <Navigation />
    <Content>
      <slot />
    </Content>
  </body>
</template>

<style scoped lang="css"></style>
