"use client";
import React from "react";
import Span from "./Span";

export default function Button() {
  const handler = () => {};
  return (
    <div>
      <button onClick={handler}>clcik</button>

      <Span />
    </div>
  );
}
