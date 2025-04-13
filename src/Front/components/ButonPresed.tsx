// ButtonPresed.tsx
import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <button className="BtnP">{text}</button>;
};

export default Button;
