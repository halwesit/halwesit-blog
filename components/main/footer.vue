<script setup lang="ts">
const route = useRoute()

const path = computed(() => route.fullPath.replace('/', ''))
</script>

<template>
  <div class="py-5 border-t dark:border-gray-800 mt-5 text-zinc-700 dark:text-zinc-300">
    <div class="px-6 container max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <FooterSite v-if="path === 'about'" />
        <FooterDeveloper v-else />
        <FooterLink />
        <FooterConnect />
      </div>

      <div class="border-t dark:border-gray-800 mt-5 text-center p-2">
        © {{ new Date().getFullYear() }} هەموو مافێک پارێزراوە بۆ
        <a href="https://t.me/halwesit" target="_blank" rel="nofollow" class="underline">HalwesIT</a>

        <!-- <div class="mt-2 flex justify-center ">
          <a href="/rss.xml" title="RSS"><Icon name="bi:rss-fill" /></a>
          <a href="https://github.com/halwestarasul" target="_blank" rel="nofollow" title="GitHub"><Icon name="mdi:github" /></a>
          <a href="https://www.linkedin.com/in/halwestarasul" target="_blank" rel="nofollow" title="LinkedIn"><Icon name="mdi:linkedin" /></a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style>
/* ترانزیشنەکان بۆ کاتی هاتنە ژوورەوە و دەرچوون */
.v-enter-active,
.v-leave-active {
  transition: all 0.4s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
