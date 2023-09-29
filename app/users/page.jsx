import React from "react";
import Button from "../components/Button";
import Comp from "./comp";
import Span from "../components/Span";

export default async function page() {
  return (
    <div>
      <span id="idspan"> user page</span>
      <Comp />
      <Button/> 
    </div>
  );
}
