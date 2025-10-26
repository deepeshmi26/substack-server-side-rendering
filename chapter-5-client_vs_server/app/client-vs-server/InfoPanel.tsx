export default function InfoPanel({ title, text }: { title: string; text: string }) {
  return (
    <div className="border rounded p-4 bg-gray-50 space-y-2">
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  );
}
