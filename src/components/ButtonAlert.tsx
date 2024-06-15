import React, { Children, ReactNode } from "react";

interface ButtonAlertProps {
  children: ReactNode;
  onClose: () => void;
}

const ButtonAlert = ({ children, onClose }: ButtonAlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      Button Alert {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};
// When copying from getBootstrap.com don't forget to change "class" to "className"
export default ButtonAlert;
