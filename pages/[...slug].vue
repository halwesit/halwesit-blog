<script setup lang="ts">
useHead({
  title: 'پەڕە نەدۆزرایەوە',
  meta: [
    {
      name: 'description',
      content: 'داواکراو نەدۆزرایەوە',
    },
  ],
})

defineOgImageComponent('About', {
  headline: 'ڕێڕەوی هەڵە',
  title: '404',
  description: 'پەڕە نەدۆزرایەوە',
})
</script>

<template>
  <div class="py-5">
    <div class="container max-w-xl mx-auto">
      <Logo404 />
    </div>
  </div>
</template>
