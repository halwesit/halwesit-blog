<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  name: 'BlogLoader',
  components: { ContentLoader },
}
</script>

<template>
  <ContentLoader
    viewBox="0 0 400 160"
    :speed="2"
    primary-color="#c9c9c9"
    secondary-color="#ecebeb"
    dir="rtl"
  >
    <!-- وێنەی پۆست -->
    <rect x="295" y="13" rx="4" ry="4" width="95" height="86" />

    <!-- ناونیشان -->
    <rect x="62" y="19" rx="3" ry="3" width="219" height="16" />

    <!-- وەسف -->
    <rect x="4" y="49" rx="3" ry="3" width="277" height="16" />

    <!-- تاگەکان -->
    <rect x="72" y="82" rx="2" ry="2" width="56" height="14" />
    <rect x="149" y="82" rx="2" ry="2" width="56" height="14" />
    <rect x="226" y="82" rx="2" ry="2" width="56" height="14" />
  </ContentLoader>
</template>
