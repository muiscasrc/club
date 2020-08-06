importScripts("/club/precache-manifest.8d41066118b11e109eb7fd23e8fb95ab.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

const cacheName = 'websiteMuiscasRCCache'

const urlsToCache = [
  '/',
  '/index.html',
  '/favicon.png',
  '/robots.txt',
  '/manifest.json',
  '/css/*.css',
  '/img/*/*',
  '/js/*.js',
  '/js/*.map'
]

self.addEventListener('install', event => {
  self.skipWaiting()

  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(urlsToCache))
  )
})

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys()
    const jobs = keys.map(key => key !== cacheName ? caches.delete(key) : Promise.resolve())
    return Promise.all(jobs)
  })())
})

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cachedResponse = await caches.match(event.request)
    if (cachedResponse) return cachedResponse

    try {
      const response = await fetch(event.request)
      return response
    } catch (err) {
      const url = new URL(event.request.url)

      const pathname = url.pathname
      const filename = pathname.substr(1 + pathname.lastIndexOf('/')).split(/\#|\?/g)[0]
      const extensions = ['.html', '.css', '.js', '.json', '.png', '.ico', '.svg', '.xml']

      if (url.origin === location.origin && !extensions.some(ext => filename.endsWith(ext))) {
        const cachedIndex = await caches.match('/')
        if (cachedIndex) return cachedIndex
      }

      throw err
    }
  })())
})

