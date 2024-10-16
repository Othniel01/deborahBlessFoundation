import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
}

export default function Button({
  children,
  className = "",
  variant = "default",
}: ButtonProps) {
  // Determine the styles based on the variant
  const baseStyles = "text-xs w-[120px] rounded-md h-10 text-center";
  const variantStyles =
    variant === "outline"
      ? "border border-black text-black bg-transparent"
      : "bg-black text-white";

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </button>
  );
}
