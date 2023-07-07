<script setup lang="ts">
import Header from '~/components/layout/HeaderVue.vue'
import Navigation from '~/components/layout/NavigationVue.vue'
import Content from '~/components/layout/ContentVue.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen items-stretch">
    <div class="w-full h-[15vh]">
      <img
        class="block w-full h-full object-cover"
        src="/images/imageBg.png"
        alt="Yegor Stetsiura personal website"
      />
    </div>
    <div class="flex flex-wrap w-full max-w-5xl mx-auto gap-8 grow">
      <Header />
      <Navigation />
      <Content>
        <slot />
      </Content>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
