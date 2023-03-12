import { App } from "./App";
import { renderToString } from "react-dom/server"
import {StaticRouter} from "react-router-dom/server"

// SSR渲染器
export function render(pagePath: string) {
  return renderToString(
    <StaticRouter location={pagePath}>
      <App />
    </StaticRouter>
  );
}

// 从路由插件中导出路由信息，方便ssr生产环境多路由打包
export { routes } from "vigor:routes";
