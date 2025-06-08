// src/components/ui/button.js
import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
