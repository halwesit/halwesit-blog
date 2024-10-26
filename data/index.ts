export const navbarData = {
  homeTitle: 'بڵۆگی هەڵوێست',
}

export const footerData = {
  author: 'هەڵوێست ڕەسوڵ حەمەد',
  aboutAuthor: 'سڵاو! من هەڵوێستم، گەشەپێدەری فوڵ-ستاک و چارەسەرکەری کێشەکان. خاوەنی کۆمپانیای Webs.krd.',
  authorInterest: 'شارەزاییەکی باشم هەیە لە JavaScript، Python، React، Vue.js و زۆر تەکنەلۆژیای تر. ئەگەر بیرۆکەیەکی سەرنجڕاکێشت هەیە، با پێکەوە کاری لەسەر بکەین.',
  aboutTheSite: 'ئەمە بڵۆگێکی کەسییە کە بە Nuxt3، TailwindCSS دروستکراوە و لە Vercel باڵوکراوەتەوە.',
}

export const homePage = {
  title: 'بەخێربێن بۆ بڵۆگەکەم',
  description: 'لێرەدا بابەت و وتار دەربارەی گەشەپێدانی وێب، جاڤاسکریپت، پایثۆن و تەکنەلۆژیاکانی تر دەدۆزیتەوە.',
}

export const blogsPage = {
  title: 'هەموو بابەتەکان',
  description: 'لێرەدا هەموو ئەو بابەتانە دەبینیت کە من نووسیومە و باڵوم کردوونەتەوە.',
}

export const categoryPage = {
  title: 'پۆلەکان',
  description: 'ئەم پۆلانە لە تاگەکانی بابەتە جیاوازەکانەوە دروستکراون',
}

export const aboutPage = {
  title: 'هەڵوێست ڕەسوڵ حەمەد',
  description: 'گەشەپێدەری فوڵ-ستاک، چارەسەرکەری کێشەکان، پسپۆڕی وێب.',
  aboutMe: 'سڵاو! من گەشەپێدەری فوڵ-ستاکم بە زیاتر لە ٦ ساڵ ئەزموون لە بواری گەشەپێدانی وێب. خاوەنی کۆمپانیای Webs.krd م و ماستەرم هەیە لە ئەندازیاری سۆفتوێر. ئامانجم بەکارهێنانی نوێترین تەکنەلۆژیایە بۆ چارەسەرکردنی کێشە ئاڵۆزەکان.',
}

export const seoData = {
  description: 'هەڵوێست ڕەسوڵ، گەشەپێدەری فوڵ-ستاک و خاوەنی Webs.krd، بە زیاتر لە ٦ ساڵ ئەزموون لە گەشەپێدانی سۆفتوێر.',
  ogTitle: 'هەڵوێست کۆد دەنووسێت و یارمەتی خەڵک دەدات فێری JavaScript، Python، React و Vue ببن',
  twitterDescription: 'بڵۆگی من، شوێنێک بۆ هاوبەشکردنی ئەزموون و فێربوون لە بواری گەشەپێدانی وێب',
  image: 'halwesit.jpg', // تکایە URL ـی وێنەکەت دابنێ
  mySite: 'YOUR_SITE_URL', // تکایە URL ـی سایتەکەت دابنێ
  twitterHandle: '@YOUR_TWITTER', // تکایە تویتەرەکەت دابنێ
  mailAddress: 'YOUR_EMAIL', // تکایە ئیمەیڵەکەت دابنێ
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'halwesit.jpg' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
