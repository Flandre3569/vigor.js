declare module "vigor:site-data" {
  import type { UserConfig } from "types";
  const siteData: UserConfig;
  export default siteData;
}

declare module "vigor:routes" {
  import { Route } from "react-router-dom";
  import { SiteConfig } from "./index";

  export const routes: Route[];
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
