<script setup lang="ts">
import { IconSend } from '~/components/common/icons'
import { InputVue, SectionTitle, TextareaVue } from '~/components/common'
</script>

<template>
  <div>
    <SectionTitle text="Contact Form" />
    <form class="grid grid-cols-2 gap-7">
      <InputVue placeholder="Full Name" label-classes="col-span-1 text-sm" />
      <InputVue type="email" placeholder="Email Address" label-classes="col-span-1 text-sm" />
      <TextareaVue
        placeholder="Your Message"
        label-classes="col-span-2"
        textarea-classes="text-sm resize-none h-40"
      />
      <div class="col-span-2 flex justify-end">
        <button
          class="flex justify-between items-center bg-gradient-to-br from-grad-start to-grad-stop rounded-3xl px-6 py-4 text-heading"
        >
          <component :is="IconSend" color="#fff" />
          <span class="ml-2">Send Message</span>
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped lang="css"></style>
