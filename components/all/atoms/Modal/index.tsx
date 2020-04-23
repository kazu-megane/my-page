import React, { ReactNode, FC } from "react";
import { createPortal } from "react-dom";

interface Props {
  className?: string;
  children: ReactNode;
}

const Modal: FC<Props> = ({ className, children }) => {
  const root = document.getElementById("root");
  return root
    ? createPortal(<div className={className}>{children}</div>, root)
    : null;
};

export default Modal;
