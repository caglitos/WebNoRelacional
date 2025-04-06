// Button.tsx
import React from "react";

interface ButtonProps {
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  const handleClick = () => {
    window.location.href = "/?page=" + href;
  };

  return (
    <button className="BtnN" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
