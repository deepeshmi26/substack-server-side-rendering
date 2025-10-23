# 🧭 Chapter 4 – Caching Strategies

## 🎯 Goal
Learn about different caching strategies in Next.js for both data fetching and page rendering.

---

## 🧩 Caching Types

### 1. Render Caching
- **SSR (No Cache)**: Server renders HTML on every request
- **SSG (Full Cache)**: HTML generated at build time and cached permanently
- **ISR (Timed Cache)**: HTML cached and regenerated at intervals
- **CSR**: No server caching, rendering happens on client

### 2. Data Caching
- **Static Data (`force-cache`)**: Data fetched at build time and cached
- **Dynamic Data (`no-store`)**: Fresh data fetched on every request
- **Revalidated Data (`revalidate`)**: Data cached and refreshed periodically

---

## 🧠 Key Points

### Cache Layers
- Next.js can cache both rendered HTML and fetched data independently
- Caching happens at the server level for better performance
- Different caching strategies can be combined based on needs

### Common Use Cases
- Use SSG/Static Data for content that rarely changes
- Use SSR/Dynamic Data for personalized or real-time content
- Use ISR/Revalidated Data for content that updates periodically

---

### Cache Invalidation
- Static cache cleared on new deployment
- ISR cache cleared based on revalidation interval
- Dynamic fetches bypass cache entirely
