import React from "react";

export default function Card({ title, children }) {
  return (
    <div className="card-panel w-72">
      <h3 className="text-highlight text-xl mb-2">{title}</h3>
      <p className="text-muted">{children}</p>
    </div>
  );
}
