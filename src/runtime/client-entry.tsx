import { createRoot } from "react-dom"
import { App } from "./App";

function runderInBrowser() {
  const containerEl = document.getElementById("root");
  if (!containerEl) {
    throw new Error("#root element not found");
  }
  createRoot(containerEl).render(<App />);
}

runderInBrowser();