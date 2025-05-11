// Button.tsx
import React from "react";

interface ButtonProps {
  text: string;
  extra: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ text, href, extra }) => {
  const handleClick = () => {
    window.location.href = href;
  };

  return (
    <button className="BtnN" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
