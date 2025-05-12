import React from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={`bg-gray-200 rounded-lg p-6 ${className}`}>{children}</div>
  );
};

export default Card;
