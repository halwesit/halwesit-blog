<script lang="ts" setup>
interface Props {
  path?: string
  title?: string
  date?: string
  description?: string
  image?: string
  alt?: string
  ogImage?: string
  tags?: Array<string>
  published?: boolean
}

withDefaults(defineProps<Props>(), {
  path: '/',
  title: 'ناونیشان نییە',
  date: 'بەروار نییە',
  description: 'وەسف نییە',
  image: '/blogs-img/blog.jpg',
  alt: 'وێنەی جێگرەوە',
  ogImage: '/blogs-img/blog.jpg',
  tags: () => [],
  published: false,
})

// گۆڕینی فۆرماتی بەروار بۆ کوردی
function formatDate(date: string) {
  if (date === 'بەروار نییە')
    return date
  try {
    const dateObj = new Date(date)
    const month = dateObj.toLocaleString('ckb', { month: 'long' })
    const day = dateObj.getDate()
    const year = dateObj.getFullYear()
    return `${day}ی ${month}ی ${year}`
  }
  catch {
    return date
  }
}
</script>

<template>
  <article class="group border dark:border-gray-800 m-2 rounded-2xl overflow-hidden shadow-sm text-zinc-700 dark:text-zinc-300">
    <NuxtLink :to="path" class="grid grid-cols-1 sm:grid-cols-10 gap-1">
      <div class="sm:col-span-3">
        <NuxtImg
          class="h-full w-full object-cover object-center rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none shadow-lg group-hover:scale-[1.02] transition-all duration-500"
          width="300"
          :src="image"
          :alt="alt"
        />
      </div>
      <div class="sm:col-span-7 p-5">
        <h2 class="text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400">
          {{ title }}
        </h2>
        <p class="text-ellipsis line-clamp-2">
          {{ description }}
        </p>
        <div class="text-black dark:text-zinc-300 text-sm mt-2 mb-1 md:flex md:space-x-6">
          <div class="flex items-center gap-1">
            <LogoDate />
            <p>{{ formatDate(date) }}</p>
          </div>
          <div class="flex items-center gap-2 flex-wrap">
            <LogoTag />
            <template v-if="tags.length">
              <p v-for="tag in tags" :key="tag" class="bg-sky-100 dark:bg-sky-900 px-2 py-0.5 rounded-full text-xs">
                {{ tag }}
              </p>
            </template>
            <p v-else class="text-zinc-500">
              تاگ نییە
            </p>
          </div>
        </div>
        <div class="flex group-hover:underline text-sky-700 dark:text-sky-400 items-center pt-2">
          <p>زیاتر بخوێنەوە</p>
          <LogoArrow />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
