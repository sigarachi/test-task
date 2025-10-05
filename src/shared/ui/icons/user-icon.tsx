import React from "react";
import type { Icon } from "./interfaces";

export const UserIcon: React.FC<Icon> = ({ color, ...props }) => {
  return (
    <svg {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="4.75" stroke={color} stroke-width="1.5" />
      <path
        d="M6 21C6 21 6 19.75 6 18.5C6 17.25 8.24914 16 12 16C15.7509 16 18 17.25 18 18.5C18 20.375 18 21 18 21"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
