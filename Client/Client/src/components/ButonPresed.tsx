// ButtonPresed.tsx
import React from "react";

interface ButtonProps {
  text: string;
  styles?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ text, styles }) => {
  return (
    <button className="BtnP" style={styles}>
      {text}
    </button>
  );
};

export default Button;
