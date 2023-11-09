<script setup lang="ts">
import { DecorProps, NavigationItemType, NavigationListType } from '~/types'

const props = defineProps<{
  links: NavigationItemType[]
  type: NavigationListType
}>()

const emit = defineEmits(['closeMenu'])

const list = computed(() =>
  props.links.map((l) => ({ title: l.title, url: l.slug ? `/${l.slug.current}` : '/' }))
)

const route = useRoute()
const router = useRouter()

const decor = ref<DecorProps>({ left: 0, width: 0 })
const nav = ref<HTMLElement | null>(null)
const path = ref<string>(route.path)

const updateDecor = (left: number, width: number) => {
  decor.value = { left, width }
}

const setDefaultDecor = () => {
  if (props.type === 'mobile') return
  const item = nav.value?.querySelector('ul li a.active') as HTMLElement
  item.classList.add('default')
  nav.value &&
    item &&
    updateDecor(
      Math.floor(item.getBoundingClientRect().left - nav.value.getBoundingClientRect().left),
      item.offsetWidth
    )
}

const itemHoverOn = (event: Event) => {
  if (props.type === 'mobile') return
  const item = event.target as HTMLElement
  const active = nav.value?.querySelector('ul li a.active') as HTMLElement
  active.classList.remove('default')
  nav.value &&
    updateDecor(
      Math.floor(item.getBoundingClientRect().left - nav.value.getBoundingClientRect().left),
      item.offsetWidth
    )
}

const listHoverOff = () => {
  if (props.type === 'mobile') return
  setDefaultDecor()
}

router.afterEach((current) => {
  path.value = current.path
  props.type === 'mobile' && emit('closeMenu')
})

onMounted(() => {
  setDefaultDecor()
})
</script>

<template>
  <nav
    ref="nav"
    :class="{
      'h-auto w-full': type === 'mobile',
      relative: type === 'desktop',
    }"
    @mouseleave="listHoverOff"
  >
    <ul :class="{ transition_link: type === 'mobile', 'flex py-2.5': type === 'desktop' }">
      <li
        v-for="(link, i) in list"
        :key="i + link.url"
        :class="{
          'mb-2': type === 'mobile',
        }"
      >
        <NuxtLink
          :to="link.url"
          class="text-text-heading"
          :class="{
            'font-poppins text-text-heading': type === 'mobile',
            'block px-8 py-2.5 font-poppins font-medium transition-all duration-300 hover:text-white':
              type === 'desktop',
            'active default': path === link.url && type === 'desktop',
            underline: path === link.url && type === 'mobile',
          }"
          @mouseenter="itemHoverOn"
        >
          <span>{{ link.title }}</span>
        </NuxtLink>
      </li>
    </ul>
    <div
      v-if="type === 'desktop'"
      class="absolute bottom-2.5 top-2.5 -z-10 block w-8 bg-text-heading transition-all duration-500"
      :style="`left: ${decor.left}px; width: ${decor.width}px;`"
    ></div>
  </nav>
</template>

<style scoped lang="css">
nav ul li a.active.default {
  @apply text-white;
}
</style>
