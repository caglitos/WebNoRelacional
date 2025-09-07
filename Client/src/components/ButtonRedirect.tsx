// Button.tsx
import React from "react";

interface ButtonProps {
  text: string;
  href: string;
  styles?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ text, href, extra, styles }) => {
  const handleClick = () => {
    window.location.href = href;
    console.log(extra);
  };

  return (
    <button className="BtnN" onClick={handleClick} style={styles}>
      {text}
    </button>
  );
};

export default Button;
