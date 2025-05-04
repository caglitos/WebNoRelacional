// Button.tsx
import React from "react";

interface ButtonProps {
  text: string;
  extra: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ text, href, extra }) => {
  const handleClick = () => {
    window.location.href = "/?page=" + href;
  };

  return (
    <div className="button-container">
      <button className="BtnN" onClick={handleClick}>
        {text}
      </button>
      {/*<span className="extra">{extra}</span>*/}
    </div>
  );
};

export default Button;
