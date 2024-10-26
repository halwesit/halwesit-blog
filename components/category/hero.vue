<script setup lang="ts">
import { categoryPage } from '~/data'

// ئەگەر پێویستت بە پرۆپس هەبوو دەتوانین لێرە پێناسەی بکەین
// const props = defineProps<{
//   customTitle?: string
// }>()
</script>

<template>
  <div class="container mx-auto py-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
      <div class="px-6 space-y-4">
        <h1
          class="text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl"
          dir="rtl"
        >
          {{ categoryPage.title }}
        </h1>
        <p
          class="dark:text-zinc-300 text-lg"
          dir="rtl"
        >
          {{ categoryPage.description }}
        </p>
      </div>
      <div class="px-6 justify-self-center">
        <LogoDogs />
      </div>
    </div>
  </div>
</template>
