import React from "react";

interface Props {
  children: string;
  color?: string; //Question Mark means that it is optional.
  /* color?: 'primary'| 'secondary' | 'danger'; //This is an example of how to allow limited choices for a prop that way the TypeScript Compiler can catch any issues */
  onClick: () => void;
}

const Buttons = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      Buttons: {children}
    </button>
  );
};

export default Buttons;
