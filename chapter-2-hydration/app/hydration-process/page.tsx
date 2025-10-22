"use client";
import { useEffect, useState } from "react";
import WarningBlock from "@/components/WarningBlock";
import InstructionAndCode from "./InstructionAndCode";

export default function HydrationProcessPage() {
  const [count, setCount] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">
        Hydration Process — Observe Interactivity
      </h2>

      <WarningBlock>
        Open{" "}
        <strong>
          Chrome DevTools → Network → Throttling → &quot;Slow 3G&quot;
        </strong>{" "}
        to see the hydration delay in action.
      </WarningBlock>

      <div className="border rounded p-6 space-y-3">
        <p>
          Count: <strong>{count}</strong>
        </p>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-4 py-2 rounded font-medium bg-blue-600 text-white hover:bg-blue-700"
        >
          Increment
        </button>

        {!isHydrated ? (
          <p className="text-gray-700">
            ⏳ Hydrating… Button clicks won’t have any effect yet.
          </p>
        ) : (
          <p className="text-green-700 font-medium">
            ✅ Hydrated! Buttons will have effect now.
          </p>
        )}
      </div>

      <InstructionAndCode />
    </div>
  );
}
