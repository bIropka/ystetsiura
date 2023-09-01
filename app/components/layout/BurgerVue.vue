<script setup lang="ts">
const isActive = ref<boolean>(false)
</script>

<template>
  <div class="relative top-[5px]">
    <div
      class="hamburger hamburger--slider"
      :class="{ 'is-active': isActive }"
      @click="() => (isActive = !isActive)"
    >
      <div class="hamburger-box">
        <div class="hamburger-inner"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.hamburger {
  font: inherit;
  display: inline-block;
  overflow: visible;
  margin: 0;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
}
.hamburger.is-active:hover,
.hamburger:hover {
  opacity: 1;
}
.hamburger.is-active .hamburger-inner {
  transform: translate3d(0, 10px, 0) rotate(45deg);
}
.hamburger.is-active .hamburger-inner:before {
  transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
  opacity: 0;
}
.hamburger.is-active .hamburger-inner:after {
  transform: translate3d(0, -20px, 0) rotate(-90deg);
}
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner:after,
.hamburger.is-active .hamburger-inner:before {
  background-color: #000;
}
.hamburger-box {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 24px;
}
.hamburger-inner {
  top: 2px;
  display: block;
  margin-top: -2px;
}
.hamburger-inner,
.hamburger-inner:after,
.hamburger-inner:before {
  position: absolute;
  width: 30px;
  height: 2px;
  transition-timing-function: ease;
  transition-duration: 0.15s;
  transition-property: transform;
  border-radius: 4px;
  background-color: #000;
}
.hamburger-inner:after,
.hamburger-inner:before {
  display: block;
  content: '';
}
.hamburger-inner:before {
  top: 10px;
  transition-timing-function: ease;
  transition-duration: 0.15s;
  transition-property: transform, opacity;
}
.hamburger-inner:after {
  bottom: -10px;
  top: 20px;
}
</style>
