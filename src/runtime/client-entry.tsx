import { createRoot } from "react-dom"
import { App } from "./App";
import siteData from "vigor:site-data";

function runderInBrowser() {
  console.log(siteData);
  const containerEl = document.getElementById("root");
  if (!containerEl) {
    throw new Error("#root element not found");
  }
  createRoot(containerEl).render(<App />);
}

runderInBrowser();