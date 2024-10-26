<template>
  <article class="group border dark:border-gray-800 m-2 rounded-2xl overflow-hidden shadow-lg text-zinc-700">
    <NuxtLink to="/">
      <div
        class="lg:h-48 md:h-36 w-full object-cover object-center group-hover:scale-[1.05] transition-all duration-500"
      >
        <LogoConfused />
      </div>
      <div class="p-5">
        <h2 class="text-3xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400">
          هیچ بابەتێک بەردەست نییە
        </h2>

        <div class="flex items-center pt-2 group-hover:underline text-sky-700 dark:text-sky-400">
          <p>گەڕانەوە بۆ سەرەتا</p>
          <!-- ئەگەر سایتەکە بە کوردییە، ئاڕاستەی ئایکۆنەکە دەبێت بگۆڕدرێت -->
          <LogoArrow class="transform scale-x-[-1]" />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
