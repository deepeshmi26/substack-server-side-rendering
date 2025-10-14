"use client";
import React from "react";

interface InstructionBlockProps {
  instructions: string;
  title?: string;
  note?: string;
}

export default function InstructionBlock({
  instructions,
  title,
  note,
}: InstructionBlockProps) {
  return (
    <div className=" shadow-sm  flex flex-col gap-1">
      {title && <h2 className="text-2xl font-semibold mb-3">{title}</h2>}
      <div className="p-2 mb-0 bg-blue-50 border-l-4 border-blue-400">
        <p className="text-sm text-gray-700">{instructions}</p>
      </div>
      {note && (
        <div className="p-2 bg-yellow-50 border-l-4 border-yellow-400 ">
          <p className="text-sm text-gray-800">
            <strong>Concept:</strong> {note}
          </p>
        </div>
      )}
    </div>
  );
}
