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

export { routes } from "vigor:routes";
