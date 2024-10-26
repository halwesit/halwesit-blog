<script lang="ts" setup>
// وەرگرتنی دوا 3 بابەتی بڵاوکراوە لە دایرێکتۆری content/blog
const { data } = await useAsyncData('recent-post', () =>
  queryContent('/blogs').limit(3).sort({ _id: -1 }).find(),
)

const formattedData = computed(() => {
  return data.value?.map((articles) => {
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
      content: 'بەخێربێن بۆ بڵۆگەکەم. لێرەدا بابەت و وتار دەربارەی گەشەپێدانی وێب، جاڤاسکریپت، تایپسکریپت، نۆد جەی ئێس، ڤیو و نەکست دەدۆزیتەوە.',
    },
  ],
})
</script>

<template>
  <div class="pb-10 px-4">
    <div class="flex flex-row items-center space-x-3 pt-5 pb-3">
      <Icon name="mdi:star-three-points-outline" size="2em" class="text-black dark:text-zinc-300" />
      <h2 class="text-4xl font-semibold text-black dark:text-zinc-300 mr-3">
        دوایین بابەتەکان
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <template v-for="post in formattedData" :key="post.title">
        <BlogCard
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
      <template v-if="data?.length === 0">
        <BlogEmpty />
      </template>
    </div>
  </div>
</template>
