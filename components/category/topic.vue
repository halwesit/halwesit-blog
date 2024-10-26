<script setup lang="ts">
import { makeFirstCharUpper } from '@/utils/helper'

const route = useRoute()

// وەرگرتنی پۆل لە پارامیتەری ڕێڕەوەکە و گەورەکردنی یەکەم پیت
const category = computed(() => {
  const name = route.params.category || ''
  let strName = ''

  if (Array.isArray(name))
    strName = name.at(0) || ''
  else strName = name

  // بۆ پشتگیری کردنی نووسینی کوردی، دەتوانین ڕاستەوخۆ ناوەکە بگەڕێنینەوە
  // چونکە پیتی کوردی پێویستی بە گەورەکردن نییە
  return strName
  // ئەگەر هەر پێویستت بە گەورەکردنی پیتی یەکەم هەبوو:
  // return makeFirstCharUpper(strName)
})
</script>

<template>
  <div class="container mx-auto">
    <div class="p-6 my-4 mx-2 rounded-md bg-gray-200 dark:bg-slate-900">
      <h1 class="text-black dark:text-white font-semibold leading-tight text-xl md:text-2xl text-right">
        #{{ category }}
      </h1>
    </div>
  </div>
</template>
