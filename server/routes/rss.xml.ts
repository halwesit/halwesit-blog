import { Feed } from 'feed'
import { serverQueryContent } from '#content/server'

const basePath = 'https://webs.krd' // گۆڕینی دۆمەین بۆ سایتەکەت

export default defineEventHandler(async (event) => {
  setHeader(event, 'content-type', 'text/xml')
  const docs = await serverQueryContent(event).sort({ date: -1 }).find()
  const feed = new Feed({
    title: 'بڵۆگی هەڵوێست',
    description: 'بڵۆگی تایبەتی هەڵوێست ڕەسوڵ - گەشەپێدەری فوڵ-ستاک',
    id: basePath,
    link: basePath,
    language: 'ku', // گۆڕینی زمان بۆ کوردی
    favicon: `${basePath}/favicon.ico`,
    copyright: 'MIT',
    author: {
      name: 'هەڵوێست ڕەسوڵ حەمەد',
      email: 'YOUR_EMAIL', // تکایە ئیمەیڵەکەت دابنێ
      link: basePath,
    },
  })

  // زیادکردنی بابەتەکان بۆ feed
  docs.forEach((doc) => {
    feed.addItem({
      title: doc.title || 'بێ ناونیشان',
      id: basePath + doc._path,
      link: basePath + doc._path,
      description: doc.description || 'وەسفی بابەت بەردەست نییە',
      content: doc.description || 'ناوەڕۆکی بابەت بەردەست نییە',
      date: new Date(doc.date),
    })
  })

  return feed.rss2()
})
