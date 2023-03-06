import { useState } from "react"
import { Content } from "../../runtime/Content";

export function Layout() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Common Content</h1>
      <Content />
      
    </div>
  );
}