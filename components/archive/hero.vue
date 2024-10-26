<script setup lang="ts">
import { blogsPage } from '~/data'

// ئەگەر پێویستت بە پرۆپی زیاتر هەیە دەتوانین لێرە defineProps بەکاربهێنین
</script>

<template>
  <div class="container mx-auto mb-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
      <div class="px-6 space-y-4">
        <h1 class="text-black dark:text-zinc-300 font-bold leading-tight text-4xl md:text-5xl">
          {{ blogsPage.title }}
        </h1>
        <p class="dark:text-zinc-300 text-lg leading-relaxed">
          {{ blogsPage.description }}
        </p>
      </div>
      <div class="px-6 justify-self-center w-full max-w-md">
        <LogoDogpow class="w-full h-auto transform hover:scale-105 transition-transform duration-300" />
      </div>
    </div>
  </div>
</template>
