import { createRoot } from "react-dom/client"
import { App } from "./App";
import siteData from "vigor:site-data";
import {BrowserRouter} from "react-router-dom"

function runderInBrowser() {
  console.log(siteData);
  const containerEl = document.getElementById("root");
  if (!containerEl) {
    throw new Error("#root element not found");
  }
  createRoot(containerEl).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

runderInBrowser();