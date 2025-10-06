import React from "react";
import ReactDOM from "react-dom";
import type { PortalProps } from "./interfaces";

export const Portal: React.FC<PortalProps> = ({
  children,
  portalId = "main",
}) => {
  const container = document.getElementById(portalId) ?? document.body;

  return ReactDOM.createPortal(children, container);
};
