import { App } from "./App";
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom/server"
import { initPageData } from "./App";
import { contextData } from "./hooks";
import { HelmetProvider } from 'react-helmet-async';


// SSR渲染器
export async function render(pagePath: string, helmetContext: object) {
  const pageData = await initPageData(pagePath);
  return renderToString(
    <HelmetProvider context={helmetContext}>
      <contextData.Provider value={pageData}>
        <StaticRouter location={pagePath}>
          <App />
        </StaticRouter>
      </contextData.Provider>
    </HelmetProvider>
  );
}

// 从路由插件中导出路由信息，方便ssr生产环境多路由打包
export { routes } from "vigor:routes";
