<script setup lang="ts">
import {
  IconCodersRank,
  IconGitHub,
  IconLinkedin,
  IconHackersRank,
} from '~/components/common/icons'

const links = [
  {
    title: 'LinkedIn',
    icon: IconLinkedin,
    url: 'https://www.linkedin.com/in/yegor-stetsiura/',
  },
  {
    title: 'GitHub',
    icon: IconGitHub,
    url: 'https://github.com/bIropka',
  },
  {
    title: 'CodersRank',
    icon: IconCodersRank,
    url: 'https://profile.codersrank.io/user/biropka',
  },
  {
    title: 'HackerRank',
    icon: IconHackersRank,
    url: 'https://www.hackerrank.com/biropka',
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
  <header class="flex bg-surface w-full p-5 col-span-6 rounded-3xl relative -mt-24">
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
      <h2 class="text-2xl font-pmedium text-heading">Yegor Stetsiura</h2>
      <span class="text-body text-sm">Programmer</span>
      <ul class="flex items-center mt-3">
        <li v-for="link in links" :key="link.url" class="mx-1">
          <a
            :href="link.url"
            :title="link.title"
            target="_blank"
            class="text-body hover:text-accent"
          >
            <component :is="link.icon" />
          </a>
        </li>
      </ul>
    </div>
    <div class="w-1/2 grid grid-cols-2 pl-7">
      <div v-for="contact in contacts" :key="contact.label" class="my-2">
        <div class="font-pmedium text-xs uppercase text-body">{{ contact.label }}</div>
        <div class="text-sm text-heading mt-1">{{ contact.value }}</div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="css"></style>
