# 🧭 Chapter 3 – Routing System (Next.js App Router)

## 🎯 Goal
Learn how Next.js App Router maps the folder structure to routes, how layouts work, and how built-in files (`loading.tsx`, `error.tsx`, `not-found.tsx`) behave during both SSR and CSR.

---

## 🧩 What We Built
```bash
app/
 ├─ layout.tsx              → Global layout (header, nav)
 ├─ page.tsx                → Home page
 ├─ about/page.tsx          → Static route
 ├─ products/
 │   ├─ layout.tsx          → Nested layout (persists between pages)
 │   ├─ page.tsx            → Product list
 │   ├─ [id]/page.tsx       → Dynamic route (async SSR)
 │   ├─ loading.tsx         → Route-specific loading UI
 │   ├─ error.tsx           → Route-specific error boundary
 │   └─ not-found.tsx       → Route-specific 404
 ├─ loading.tsx             → Global loading
 ├─ error.tsx               → Global error
 └─ not-found.tsx           → Global 404
```
## 🧠 FAQs (Quick Answers)

### Q1. When is `loading.tsx` visible?
- ✅ When the route or data is still loading (SSR or non-prefetched CSR).
- ❌ Not visible if the route was prefetched or already cached.

---
### Q2. When to use `Suspense` vs `loading.tsx`?

- Use **`loading.tsx`** → when an entire **page or route** is loading (handled automatically by Next.js).  
- Use **`<Suspense>`** → when a **part of the page** (like a section or component) is loading inside an already rendered page.

---
### Q3. What happens if I add `error.tsx` or `not-found.tsx` in nested folders?
- They render **inside their parent layouts**.
- Only the affected route’s content changes — outer layouts remain visible.

---

### Q4. Do these boundaries run only during SSR?
- No. All (`loading.tsx`, `error.tsx`, `not-found.tsx`) work in both SSR and CSR.
- React uses them as boundaries in both render contexts.

---

### Q5. Why doesn’t my `loading.tsx` appear during navigation?
- Because Next.js `<Link>` **prefetches** routes by default.
- Use `prefetch={false}` to disable prefetching and see the loading UI.

---

### Q6. Are nested `loading`, `error`, or `not-found` scoped locally?
- Yes. Each applies only to its own folder and child routes.
- A parent’s fallback is used only if the child doesn’t define one.

---

### Q7. Do `error.tsx`, `loading.tsx` and `not-found.tsx` render inside parent layouts?
- Yes. They all renders **inside its parent layouts**. Not its own layout.

### Q8.What happens if `error.tsx`, `loading.tsx`, or `not-found.tsx` is missing in a child segment?
- Missing boundaries inherit behavior from the nearest parent; if no parent has one, Next.js uses its global fallback.


### Q9. Is `error.tsx` required to have `"use client"`?
- Yes. It must include `"use client"` because it acts as a React error boundary and needs to run on the client.
