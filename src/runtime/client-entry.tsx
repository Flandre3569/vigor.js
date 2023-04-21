import { createRoot } from "react-dom/client"
import { App } from "./App";
import siteData from "vigor:site-data";
import { BrowserRouter } from "react-router-dom"
import { initPageData } from "./App";
import { contextData } from "./hooks";
import { HelmetProvider} from "react-helmet-async";

async function runderInBrowser() {
  const containerEl = document.getElementById("root");
  
  if (!containerEl) {
    throw new Error("#root element not found");
  }
  // 初始化页面数据
  const pageData = await initPageData(location.pathname);
  createRoot(containerEl).render(
    // 自定义head
    <HelmetProvider>
      <contextData.Provider value={ pageData }>
        <BrowserRouter>
        <App />
      </BrowserRouter>
      </contextData.Provider>
    </HelmetProvider>
    
  );
}

runderInBrowser();