<script setup lang="ts">
import type { BlogPost } from '@/types/blog'
import { navbarData, seoData } from '~/data'

const { path } = useRoute()

// گەڕاندنەوەی زانیاری بڵۆگەکە
const { data: articles, error } = await useAsyncData(`blog-post-${path}`, () => queryContent(path).findOne())

// ئەگەر هەڵە ڕوویدا، بڕۆ بۆ پەڕەی 404
if (error.value)
  navigateTo('/404')

// دروستکردنی داتای بڵۆگ بە تایپی BlogPost
const data = computed<BlogPost>(() => {
  return {
    title: articles.value?.title || 'ناونیشان بەردەست نییە',
    description: articles.value?.description || 'وەسف بەردەست نییە',
    image: articles.value?.image || '/not-found.jpg',
    alt: articles.value?.alt || 'وەسفی وێنە بەردەست نییە',
    ogImage: articles.value?.ogImage || '/not-found.jpg',
    date: articles.value?.date || 'بەروار بەردەست نییە',
    tags: articles.value?.tags || [],
    published: articles.value?.published || false,
  }
})

// ڕێکخستنی سەری پەڕە (SEO)
useHead({
  title: data.value.title || '',
  meta: [
    { name: 'description', content: data.value.description },
    // تاگەکانی فەیسبووک
    { property: 'og:site_name', content: navbarData.homeTitle },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: `${seoData.mySite}/${path}`,
    },
    {
      property: 'og:title',
      content: data.value.title,
    },
    {
      property: 'og:description',
      content: data.value.description,
    },
    {
      property: 'og:image',
      content: data.value.ogImage || data.value.image,
    },
    // تاگەکانی تویتەر
    { name: 'twitter:site', content: seoData.twitterHandle },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:url',
      content: `${seoData.mySite}/${path}`,
    },
    {
      name: 'twitter:title',
      content: data.value.title,
    },
    {
      name: 'twitter:description',
      content: data.value.description,
    },
    {
      name: 'twitter:image',
      content: data.value.ogImage || data.value.image,
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `${seoData.mySite}/${path}`,
    },
  ],
})

// دروستکردنی وێنەی OG
defineOgImageComponent('بڵۆگ', {
  headline: 'بەخێربێن 👋',
  title: data.value.title || '',
  description: data.value.description || '',
  link: data.value.ogImage,
})
</script>

<template>
  <div class="px-6 container max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12">
    <div class="col-span-12 lg:col-span-9">
      <BlogHeader
        :title="data.title"
        :image="data.image"
        :alt="data.alt"
        :date="data.date"
        :description="data.description"
        :tags="data.tags"
      />
      <div
        class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg
        prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"
      >
        <ContentRenderer v-if="articles" :value="articles">
          <template #empty>
            <p>هیچ ناوەڕۆکێک نەدۆزرایەوە.</p>
          </template>
        </ContentRenderer>
      </div>
    </div>
    <BlogToc />

    <!-- بەشی هاوبەشکردنی کۆمەڵایەتی -->
    <div class="flex flex-row flex-wrap md:flex-nowrap mt-10 gap-2">
      <SocialShare
        v-for="network in ['facebook', 'twitter', 'linkedin', 'email']"
        :key="network"
        :network="network"
        :styled="true"
        :label="true"
        class="p-1"
        :aria-label="`هاوبەشی بکە لە ${network}`"
      />
    </div>
  </div>
</template>
