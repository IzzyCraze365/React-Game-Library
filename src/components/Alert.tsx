import React, { ReactNode } from "react";

interface Props {
  children: ReactNode; //We are pulling data from the App.tsx
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">Alert {children}</div>;
};

export default Alert;
