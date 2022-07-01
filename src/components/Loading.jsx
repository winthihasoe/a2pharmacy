import React from "react";

export default function Loading({ title }) {
  return (
    <div
      className="inner"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {title}
    </div>
  );
}
