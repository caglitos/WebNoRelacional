// ButtonDel.tsx
import React from "react";

interface ButtonProps {
  onClick: () => void;
}

const ButtonD: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="BtnD">
      —
    </button>
  );
};

export default ButtonD;
