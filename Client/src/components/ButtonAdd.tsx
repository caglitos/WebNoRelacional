// ButtonDel.tsx
import React from "react";

interface ButtonProps {
  onClick: () => void;
  classN: string;
}

const ButtonD: React.FC<ButtonProps> = ({ onClick, classN }) => {
  return (
    <button onClick={onClick} className={"BtnA " + classN}>
      +
    </button>
  );
};

export default ButtonD;
