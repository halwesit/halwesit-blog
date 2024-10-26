<script  setup>
// دیاریکردنی ID ـی ئەو بابەتانەی دەمانەوێت
const trendingPostIds = [
  'fix-tailwindcss-intellisense-in-nuxt3',
  'digital-transformation',
  'vue3-awesome-library',
]

// وەرگرتنی بابەتە دیاریکراوەکان بەپێی ID
const { data } = await useAsyncData('trending-post', async () => {
  const posts = await queryContent('/blogs').find()
  return posts.filter(post =>
    trendingPostIds.some(id => post._path.includes(id)),
  )
})

const formattedData = computed(() => {
  if (!data.value)
    return []

  // ڕێکخستنی بابەتەکان بەپێی ئەو ڕیزبەندییەی کە لە trendingPostIds دیاریمان کردووە
  const orderedPosts = trendingPostIds.map(id =>
    data.value.find(post => post._path.includes(id)),
  ).filter(Boolean)

  return orderedPosts.map((articles) => {
    return {
      path: articles._path,
      title: articles.title || 'ناونیشان بەردەست نییە',
      description: articles.description || 'وەسف بەردەست نییە',
      image: articles.image || '/not-found.jpg',
      alt: articles.alt || 'وێنەی جێگرەوە بەردەست نییە',
      ogImage: articles.ogImage || '/not-found.jpg',
      date: articles.date || 'بەروار بەردەست نییە',
      tags: articles.tags || [],
      published: articles.published || false,
    }
  })
})

useHead({
  title: 'سەرەکی',
  meta: [
    {
      name: 'description',
      content:
        'بەخێربێن بۆ بڵۆگەکەم. لێرەدا بابەت و وتار دەربارەی گەشەپێدانی وێب، جاڤاسکریپت، تایپسکریپت، نۆد، ڤیو و نەکست دەدۆزیتەوە.',
    },
  ],
})
</script>

<template>
  <div class="px-4">
    <div class="flex flex-row items-center space-x-3 pt-5 pb-3">
      <Icon name="mdi:star-three-points-outline" size="2em" class="text-black dark:text-zinc-300" />
      <h2 class="text-4xl font-semibold text-black dark:text-zinc-300">
        بابەتە بەناوبانگەکان
      </h2>
    </div>
    <div class="grid grid-cols-1">
      <template v-for="post in formattedData" :key="post.title">
        <ArchiveCard
          :path="post.path"
          :title="post.title"
          :date="post.date"
          :description="post.description"
          :image="post.image"
          :alt="post.alt"
          :og-image="post.ogImage"
          :tags="post.tags"
          :published="post.published"
        />
      </template>
      <template v-if="formattedData.length === 0">
        <BlogEmpty />
      </template>
    </div>
  </div>
</template>
