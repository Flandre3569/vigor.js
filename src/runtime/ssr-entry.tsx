import { App } from "./App";
import { renderToString } from "react-dom/server"
import {StaticRouter} from "react-router-dom/server"

// SSR渲染器
export function render() {
  return renderToString(
    <StaticRouter location={"/guide"}>
      <App />
    </StaticRouter>
  );
}
