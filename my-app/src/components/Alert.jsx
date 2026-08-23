import React from "react";

export default function Alert({ type = "info", size = "md", children }) {
  const baseClass = {
    success: "alert-success",
    warning: "alert-warning",
    error: "alert-error",
    info: "alert-info",
  }[type];

  const sizeClass = {
    sm: `${baseClass}-sm`,
    md: baseClass,
    lg: `${baseClass}-lg`,
  }[size];

  return <div className={sizeClass}>{children}</div>;
}
