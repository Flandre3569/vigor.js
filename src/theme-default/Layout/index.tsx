import { useState } from "react"
import { Content } from "@runtime";
import "uno.css"

export function Layout() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 m="2">Common Content</h1>
      <h1 p="2">index module</h1>
      <Content />
      
    </div>
  );
}