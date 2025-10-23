// app/api/time/route.ts
export async function GET() {
  const now = new Date();
  const data = {
    datetime: now.toISOString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    formatted: now.toLocaleString(),
  };

  return Response.json(data, {
    headers: { "Cache-Control": "no-store" },
  });
}
