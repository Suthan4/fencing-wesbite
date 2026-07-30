import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Admin/API paths that no crawler — human search or AI — should index.
const disallowPaths = ["/admin", "/api"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: every standard search crawler.
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowPaths,
      },
      // --- AI answer-engine / GEO crawlers ---
      // Explicitly allowed (rather than left to the "*" rule) so intent is
      // documented and each bot can be tuned independently later. All of
      // these are "we want to be found and cited in AI answers" bots —
      // OpenAI, Anthropic, Perplexity, Google AI, Apple AI, Meta AI and
      // Common Crawl (used to train most open models).

      // OpenAI — GPTBot (training), OAI-SearchBot (ChatGPT search index),
      // ChatGPT-User (live fetch when a user asks ChatGPT about us).
      { userAgent: "GPTBot", allow: "/", disallow: disallowPaths },
      { userAgent: "OAI-SearchBot", allow: "/", disallow: disallowPaths },
      { userAgent: "ChatGPT-User", allow: "/", disallow: disallowPaths },

      // Anthropic — ClaudeBot/anthropic-ai (training), Claude-SearchBot
      // (answer-time retrieval), Claude-User (live fetch for a Claude user).
      { userAgent: "ClaudeBot", allow: "/", disallow: disallowPaths },
      { userAgent: "anthropic-ai", allow: "/", disallow: disallowPaths },
      { userAgent: "Claude-SearchBot", allow: "/", disallow: disallowPaths },
      { userAgent: "Claude-User", allow: "/", disallow: disallowPaths },

      // Perplexity — index builder + live user-triggered fetch.
      { userAgent: "PerplexityBot", allow: "/", disallow: disallowPaths },
      { userAgent: "Perplexity-User", allow: "/", disallow: disallowPaths },

      // Google-Extended: controls Gemini/Vertex AI training & grounding use
      // specifically — does not affect regular Googlebot / Search ranking.
      { userAgent: "Google-Extended", allow: "/", disallow: disallowPaths },

      // Apple-Extended: same idea for Apple Intelligence / Siri search.
      { userAgent: "Applebot-Extended", allow: "/", disallow: disallowPaths },

      // Meta AI training crawler.
      { userAgent: "meta-externalagent", allow: "/", disallow: disallowPaths },

      // Common Crawl — the open dataset many LLMs (incl. open-source ones)
      // train on. Allowing it is the cheapest way to reach models beyond
      // the big-name labs.
      { userAgent: "CCBot", allow: "/", disallow: disallowPaths },

      // Amazon (Alexa+/Rufus) and DuckDuckGo's AI assistant retrieval bot.
      { userAgent: "Amazonbot", allow: "/", disallow: disallowPaths },
      { userAgent: "DuckAssistBot", allow: "/", disallow: disallowPaths },

      // Bytespider (ByteDance/TikTok) has a documented history of ignoring
      // robots.txt, so this Allow is mostly a formality — but there's no
      // reason to explicitly disallow a channel that could send us leads.
      { userAgent: "Bytespider", allow: "/", disallow: disallowPaths },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
