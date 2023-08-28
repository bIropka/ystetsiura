<script setup lang="ts">
import SocialIcon from '~/components/common/SocialIcon.vue'
import sanityImageBuilder from '~/api/sanity-image-builder'
import { PersonalDataType } from '~/types'
import NavigationVue from '~/components/layout/NavigationVue.vue'

defineProps<{
  content: PersonalDataType
}>()

const isOpened = ref<boolean>(false)
const router = useRouter()
router.afterEach(() => {
  isOpened.value = false
})
</script>

<template>
  <header v-if="content" class="header">
    <div
      class="flex items-center justify-between md:block md:w-1/2 md:border-r md:border-solid md:border-br md:pl-40 md:pr-7"
    >
      <div
        v-if="content.image"
        class="mr-2 h-12 w-12 shrink-0 overflow-hidden rounded-full border-board md:absolute md:-top-7 md:left-7 md:mr-0 md:h-36 md:w-36 md:rounded-[32px] md:border-[6px]"
      >
        <nuxt-img
          class="h-full w-full object-cover object-top"
          :src="sanityImageBuilder(content.image).width(132).height(132).url()"
          :alt="content.firstName + ' ' + content.lastName"
          format="webp"
          width="132"
          height="132"
        />
      </div>
      <div class="hidden sm:block">
        <h2
          v-if="content.firstName && content.lastName"
          class="font-pmedium text-xl text-heading md:text-2xl"
        >
          {{ content.firstName }} {{ content.lastName }}
        </h2>
        <span v-if="content.position" class="block text-sm text-body">{{ content.position }}</span>
      </div>
      <ul class="flex items-center md:mt-3 md:flex-nowrap">
        <li v-for="link in content.socialList" :key="link.url" class="mx-1.5 md:mx-1">
          <a
            :href="link.url"
            :title="link.title"
            target="_blank"
            class="text-body hover:text-accent"
          >
            <SocialIcon :type="link.title" />
          </a>
        </li>
      </ul>
      <button
        type="button"
        class="text-gray-400 hover:text-gray-500 relative -mx-2 inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset md:hidden"
        aria-expanded="false"
        @click="() => (isOpened = !isOpened)"
      >
        <span class="absolute -inset-0.5"></span>
        <span class="sr-only">Open menu</span>
        <svg
          v-if="isOpened"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#FCFCFC"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <svg
          v-else
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#FCFCFC"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
    <div class="contacts-wrapper" :class="[isOpened ? 'grid ' : 'hidden']">
      <NavigationVue class="block md:hidden" />
      <div class="contacts">
        <div class="mb-4 block md:hidden">
          <h2
            v-if="content.firstName && content.lastName"
            class="font-pmedium text-xl text-heading"
          >
            {{ content.firstName }} {{ content.lastName }}
          </h2>
          <span v-if="content.position" class="block text-sm text-body">{{
            content.position
          }}</span>
        </div>
        <div class="contacts-item">
          <div class="contacts-label">email</div>
          <div class="contacts-value">{{ content.email }}</div>
        </div>
        <div class="contacts-item">
          <div class="contacts-label">Birthday</div>
          <div class="contacts-value">{{ content.birthday }}</div>
        </div>
        <div class="contacts-item">
          <div class="contacts-label">Phone</div>
          <div class="contacts-value">{{ content.phone }}</div>
        </div>
        <div class="contacts-item">
          <div class="contacts-label">Location</div>
          <div class="contacts-value">{{ content.location }}</div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="css">
.header {
  @apply fixed left-0 top-0 z-50 w-full bg-dark p-3 md:relative md:col-span-6 md:-mt-24 md:flex md:w-full md:rounded-3xl md:bg-board md:p-5;
}
.contacts-wrapper {
  @apply fixed bottom-0 left-0 right-0 top-[72px] z-50 grid-cols-2 overflow-auto border-t border-solid border-br bg-dark p-4 text-right md:static md:block md:w-1/2 md:overflow-visible md:border-t-0 md:bg-board md:p-0;
}
.contacts {
  @apply col-span-1 md:grid md:grid-cols-2 md:pl-7 md:text-left;
}
.contacts-item {
  @apply mb-4 md:my-2;
}
.contacts-label {
  @apply font-pmedium text-xs uppercase text-body;
}
.contacts-value {
  @apply mt-1 text-sm text-heading;
}
</style>
