import React from "react";

export default function Button({ variant = "primary", size = "md", children }) {
  const baseClass = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  }[variant];

  const sizeClass = {
    sm: `${baseClass}-sm`,
    md: baseClass,
    lg: `${baseClass}-lg`,
  }[size];

  return <button className={sizeClass}>{children}</button>;
}
