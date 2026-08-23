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

  const icons = { success: "OK", warning: "!", error: "x", info: "i" };
  return <div className={sizeClass}><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current text-[10px] font-bold">{icons[type]}</span><span>{children}</span></div>;
}
