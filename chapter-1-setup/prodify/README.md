# 🧩 Prodify — Chapter 1: Rendering Fundamentals

This chapter introduces the **four core rendering strategies** in Next.js:  
**CSR (Client-Side Rendering), SSR (Server-Side Rendering), SSG (Static Site Generation), and ISR (Incremental Static Regeneration).**

---

## 🚀 What We Built

### 🧱 Local API  
- **Route:** `GET /api/time`  
- Returns current local time (in ISO and formatted forms).  
- Used by all pages as the shared data source.

### 📄 Rendering Demos  
Each rendering strategy is demonstrated in its own page:

| Route | Rendering Type | Key Feature |
|--------|----------------|-------------|
| `/csr` | Client-Side Rendering | Data fetched in browser after hydration using `use client` |
| `/ssr` | Server-Side Rendering | Rendered fresh on every request using `dynamic = force-dynamic` |
| `/ssg` | Static Site Generation | Generated once at build time using `dynamic = force-static`;|
| `/isr` | Incremental Static Regeneration | Regenerates every 30s (`revalidate = 30`) |

---

## 🧩 What We Learned

### **CSR**
- Uses `use client` directive.
- Page loads first, then fetches data from `/api/time`.
- HTML source is empty until React hydrates.
- Great for highly interactive dashboards.

### **SSR**
- Uses `export const dynamic = 'force-dynamic'`.
- Always rendered on the **server per request**.
- Perfect for authenticated or real-time pages.

### **SSG**
- Generated once during `next build`.
- SSG wont work in dev server as next js cache is overriden during dev mode. Thus, fetch happens again and again in dev mode. Make sure to use build version.
- Served as static HTML — instant load speed.
- Ideal for marketing or content pages.

### **ISR**
- Mix between SSG and SSR.
- ISR wont work in dev server as next js cache is overriden during dev mode. Thus, fetch happens again and again in dev mode. Make sure to use build version.
- Generates static output but **revalidates** periodically.
- Best for blogs or semi-dynamic pages.
