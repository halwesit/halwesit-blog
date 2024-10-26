<script setup lang="ts">
const { path } = useRoute()
const articles = await queryContent(path).findOne()

const links = articles?.body?.toc?.links || []

// تایبەتمەندی بۆ چالاککردنی لینکی ئێستا
const activeLink = ref('')

// چاودێریکردنی سکرۆڵ بۆ دیاریکردنی بەشی ئێستا
onMounted(() => {
  window.addEventListener('scroll', () => {
    const sections = links.map(link => document.getElementById(link.id))
    const scrollPosition = window.scrollY + 100

    sections.forEach((section) => {
      if (section) {
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom)
          activeLink.value = section.id
      }
    })
  })
})
</script>

<template>
  <div v-if="links.length > 0" class="lg:col-span-3 sticky top-28 h-fit max-h-[calc(100vh-8rem)] overflow-y-auto hidden lg:block justify-self-end">
    <div class="border dark:border-gray-800 p-3 rounded-md min-w-[200px] dark:bg-slate-900">
      <h1 class="text-sm font-bold mb-3 border-b dark:border-gray-800 pb-2">
        ناوەڕۆک
      </h1>
      <NuxtLink
        v-for="link in links"
        :key="link.id"
        :to="`#${link.id}`"
        class="block text-xs mb-3 hover:underline transition-colors duration-200" :class="[
          activeLink === link.id ? 'text-sky-600 dark:text-sky-400 font-medium' : 'text-zinc-600 dark:text-zinc-400',
        ]"
      >
        {{ link.text }}
      </NuxtLink>
    </div>
  </div>
</template>
