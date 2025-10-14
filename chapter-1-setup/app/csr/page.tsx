"use client";
import InstructionAndCode from "./InstructionAndCode";
import { useEffect, useState } from "react";

export default function CSRPage() {
  const [time, setTime] = useState("");

  useEffect(() => {
    fetch("/api/time")
      .then((response) => response.json())
      .then((d) => setTime(`${d.formatted} (${d.timezone})`));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">Client Rendered Time</h2>
      <p>{time}</p>
      <InstructionAndCode />
    </div>
  );
}
