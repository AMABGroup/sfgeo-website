// Netlify event function: runs after every successful deploy (the file name is the event).
// For production deploys only, it pings IndexNow (Bing, and the engines that read Bing's index,
// including ChatGPT search) with the sitemap URLs whose lastmod moved in the last 7 days, so a
// content change reaches them without anyone running scripts/indexnow.mjs by hand.
// Previews and branch deploys are skipped. A failure is logged and never blocks anything.
const KEY = "e22b4e57f5056ea9b38c349a81e670a1";
const HOST = "sfgeo.com.au";
const WINDOW_DAYS = 7;

export const handler = async (event) => {
  let context = "unknown";
  try {
    context = JSON.parse(event.body || "{}")?.payload?.context ?? "unknown";
  } catch {}
  if (context !== "production") {
    return { statusCode: 200, body: `indexnow: skipped (${context})` };
  }
  try {
    const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
    const cutoff = Date.now() - WINDOW_DAYS * 86400000;
    const urls = [...xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)]
      .filter((m) => Date.parse(m[2]) >= cutoff)
      .map((m) => m[1]);
    if (!urls.length) {
      console.log("indexnow: no recently changed URLs");
      return { statusCode: 200, body: "indexnow: nothing to send" };
    }
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
    });
    console.log(`indexnow: ${res.status} for ${urls.length} URLs`);
    return { statusCode: 200, body: `indexnow: ${res.status} for ${urls.length} URLs` };
  } catch (err) {
    console.error("indexnow: failed", err);
    return { statusCode: 200, body: "indexnow: failed (logged)" };
  }
};
