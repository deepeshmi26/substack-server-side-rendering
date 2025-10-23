"use client";
import React, { ReactNode } from "react";

interface WarningBlockProps {
  children: ReactNode;
}

export default function WarningBlock({ children }: WarningBlockProps) {
  return (
    <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded">
      <div className="text-sm text-gray-800">{children}</div>
    </div>
  );
}
