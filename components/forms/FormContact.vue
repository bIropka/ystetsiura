<script setup lang="ts">
import { IconSend } from '~/components/common/icons'
import { InputVue, TextareaVue } from '~/components/common'
</script>

<template>
  <form class="grid grid-cols-2 gap-7">
    <InputVue placeholder="Full Name" label-classes="col-span-1" />
    <InputVue type="email" placeholder="Email Address" label-classes="col-span-1" />
    <TextareaVue placeholder="Your Message" />
    <div class="col-span-2 flex justify-end">
      <button>
        <component :is="IconSend" color="#fff" />
        <span>Send Message</span>
      </button>
    </div>
  </form>
</template>

<style scoped lang="css"></style>
