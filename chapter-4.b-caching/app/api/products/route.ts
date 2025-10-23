export async function GET() {
  const products = [
    { id: 1, name: "Next.js Mug", price: 12 },
    { id: 2, name: "React Hoodie", price: 40 },
    { id: 3, name: "TypeScript Cap", price: 20 },
  ];

  // Simulate DB/network latency
  await new Promise((r) => setTimeout(r, 1000));

  return Response.json({ products, time: new Date().toISOString() });
}
