<script setup lang="ts">
interface Props {
  // کۆدەکە وەک سترینگ
  code: string
  // زمانی بەرنامەسازی (جاڤاسکریپت، پایثۆن، هتد)
  language?: string | null
  // ناوی فایلەکە
  filename?: string | null
  // هێڵە هایلایت کراوەکان
  highlights?: number[]
  // زانیاری زیاتر دەربارەی کۆدەکە
  meta?: string | null
}

// پێناسەکردنی props بە تایپی تایبەت
defineProps<Props>()
</script>

<template>
  <div class="code-block relative" dir="auto">
    <!-- ناوی فایل ئەگەر هەبوو -->
    <div v-if="filename" class="filename px-4 py-2 text-sm text-gray-500 bg-gray-100 dark:bg-gray-800 rounded-t-md">
      {{ filename }}
    </div>

    <!-- کۆدەکە -->
    <div class="code-content">
      <slot />
    </div>

    <!-- میتا داتا ئەگەر هەبوو -->
    <div v-if="meta" class="meta px-4 py-2 text-sm text-gray-500 bg-gray-100 dark:bg-gray-800 rounded-b-md">
      {{ meta }}
    </div>
  </div>
</template>

<style scoped>
.code-block {
  margin: 1rem 0;
  border-radius: 0.375rem;
  overflow: hidden;
  background-color: var(--code-bg);
}

pre code .line {
  display: block;
  min-height: 1rem;
  padding: 0 1rem;
}

pre code .line.highlighted {
  background-color: rgba(200, 200, 255, 0.1);
  border-left: 2px solid #3b82f6;
}

.dark .code-block {
  --code-bg: #1e293b;
}

.light .code-block {
  --code-bg: #f8fafc;
}
</style>
