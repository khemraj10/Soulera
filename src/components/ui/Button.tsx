import React from "react";

interface ButtonProps {
  variant?: "ghost" | "solid";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  className,
  children,
  onClick,
}) => {
  const buttonClass =
    variant === "ghost"
      ? " text-gray-700 hover:bg-gray-100"
      : "bg-[#525ae7] text-white hover:bg-[#525ae7]";

  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 font-semibold  ${className} ${buttonClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
