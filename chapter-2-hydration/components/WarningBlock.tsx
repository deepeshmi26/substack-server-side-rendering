"use client";
import React, { ReactNode } from "react";

interface WarningBlockProps {
  children: ReactNode;
}

export default function WarningBlock({ children }: WarningBlockProps) {
  return (
    <div className="p-2 bg-red-50 border-l-4 border-red-400">
      <p className="text-sm text-gray-800">{children}</p>
    </div>
  );
}
