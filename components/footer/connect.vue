<script setup lang="ts">
import { footerData, seoData } from '~/data'
</script>

<template>
  <div>
    <p class="text-black dark:text-zinc-300 text-base font-semibold">
      پەیوەندیم پێوە بکە
    </p>
    <p class="dark:text-zinc-300">
      {{ footerData.authorInterest }}
    </p>

    <a
      :href="`mailto:${seoData.mailAddress}`"
      class="block text-center w-full bg-sky-700 hover:bg-sky-800 transition-colors duration-300 p-2 rounded-lg text-[#F1F2F4] mt-3 text-sm"
    >
      ناردنی ئیمەیڵ
    </a>
  </div>
</template>
