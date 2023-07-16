<script setup lang="ts">
import IconLinkedin from '~/components/common/icons/IconLinkedin.vue'

const links = [
  {
    icon: IconLinkedin,
    url: '#1',
  },
]

const contacts = [
  {
    label: 'Email',
    value: 'ronald@example.com',
  },
  {
    label: 'Birthday',
    value: '17 March, 1995',
  },
  {
    label: 'Phone',
    value: '+1 (070) 123–8459',
  },
  {
    label: 'Location',
    value: 'San-Francisco, USA',
  },
]
</script>

<template>
  <header class="flex bg-surface w-full p-7 col-span-6 rounded-3xl relative -mt-24">
    <div class="w-1/2 pr-7 pl-40 border-br border-solid border-r">
      <div
        class="w-36 h-36 rounded-[32px] overflow-hidden border-[6px] border-surface absolute left-7 -top-7"
      >
        <img
          class="w-full h-full object-cover object-top"
          src="/images/Yegor_Stetsiura.jpg"
          alt="Yegor Stetsiura"
        />
      </div>
      <h2 class="text-2xl font-pmedium">Yegor Stetsiura</h2>
      <span class="text-body">Programmer</span>
      <ul>
        <li v-for="link in links" :key="link.url">
          <a :href="link.url">
            <component :is="link.icon" />
          </a>
        </li>
      </ul>
    </div>
    <div class="w-1/2 grid grid-cols-2 pl-7">
      <div v-for="contact in contacts" :key="contact.label">
        <div>{{ contact.label }}</div>
        <div>{{ contact.value }}</div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="css"></style>
