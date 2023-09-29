import React from "react";

export default function layout({ children }) {
  return (
    <div>
    
      <p>User Header</p>
      {children}
    </div>
  );
}
