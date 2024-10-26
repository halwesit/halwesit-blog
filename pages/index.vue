<script lang="ts" setup>
import { navbarData } from '~/data'

useHead({
  title: 'ماڵەوە',
  meta: [
    {
      name: 'description',
      content:
        'بەخێربێن بۆ بڵۆگەکەم. لێرەدا بابەت و وتار دەربارەی گەشەپێدانی وێب، جاڤاسکریپت، پایثۆن، ڕیاکت، ڤیو، و نێکست دەدۆزیتەوە، لەگەڵ ئامۆژگاری و سەرچاوەی فێربوون.',
    },
  ],
})

// دروستکردنی وێنەی OG
defineOgImageComponent('About', {
  headline: 'سڵاو و ڕێز 👋',
  title: navbarData.homeTitle,
  description: 'لەگەڵ من فێری گەشەپێدانی وێب ببە - جاڤاسکریپت، تایپسکریپت، ڤیو، نێکست، دۆکەر، کوبەرنێتیس',
  link: '/halwest.jpg', // تکایە ناوی فایلی وێنەکەت دابنێ
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero />
    <MainRecent />
    <MainTrending />
  </main>
</template>
