// Ping IndexNow (Bing, Yandex, and the engines that read from Bing — including
// the web index ChatGPT search uses) with every URL in the sitemap.
// Run after each deploy:  node scripts/indexnow.mjs
const KEY = "e22b4e57f5056ea9b38c349a81e670a1";
const HOST = "sfgeo.com.au";
const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
});
console.log(`IndexNow: ${res.status} for ${urls.length} URLs`);
