<script setup lang="ts">
interface Props {
  title: string
  count: number
}

withDefaults(defineProps<Props>(), {
  title: 'ناونیشان بەردەست نییە',
  count: 0,
})

// ڕەنگی هەڕەمەکی بۆ تاگەکان
const color = [
  '#dc2626', // سور
  '#d97706', // پرتەقاڵی
  '#65a30d', // سەوز
  '#059669', // سەوزی تۆخ
  '#0891b2', // شینی ڕۆشن
  '#0284c7', // شین
  '#4f46e5', // شینی تۆخ
  '#7c3aed', // وەنەوشەیی
  '#c026d3', // پەمەیی
  '#db2777', // سوری تۆخ
]

// وەرگرتنی ژمارەیەکی هەڕەمەکی
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const picAColor = ref(`${color.at(getRandomInt(0, 8))}`)
</script>

<template>
  <div
    class="text-[#F1F2F4] px-5 py-3 rounded hover:underline
    rand-bg-color hover:scale-[1.05] transition-all duration-500"
  >
    <NuxtLink :to="`/categories/${title.toLocaleLowerCase()}`" class="text-lg font-extrabold">
      <h1>#{{ title }}({{ count }})</h1>
    </NuxtLink>
  </div>
</template>

<style scoped>
.rand-bg-color {
  background-color: v-bind(picAColor);
}
</style>
