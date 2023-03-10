declare module "vigor:site-data" {
  import type { UserConfig } from "types";
  const siteData: UserConfig;
  export default siteData;
}

declare module "vigor:routes" {
  import { RouteObject } from "react-router-dom";
  const routes: RouteObject[];
  export { routes };
}
