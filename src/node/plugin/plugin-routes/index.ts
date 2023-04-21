import { Plugin } from "vite";
import { RouteService } from "./RouteService";
import { Element } from "hast";
import react, { ComponentType } from "react";
import { Frontmatter } from "../../../types/index";

export interface PageModule {
  default: ComponentType;
  frontmatter?: Frontmatter;
  [key: string]: unknown;
  title?: string;
}
export interface Route {
  path: string;
  element: react.ReactElement;
  filePath: string;
  preload: () => Promise<PageModule>;
}
interface PluginRoutes {
  root: string;
  isSSR: boolean;
}

export const CONVENTIONAL_ROUTE_ID = "vigor:routes";

export function pluginRoutes(options: PluginRoutes): Plugin {
  const rootService = new RouteService(options.root);
  return {
    name: "vigor:routes",
    async configResolved() {
      await rootService.init();
    },
    resolveId(id: string) {
      if (id === CONVENTIONAL_ROUTE_ID) {
        return "\0" + id;
      }
    },
    load(id: string) {
      if (id === "\0" + CONVENTIONAL_ROUTE_ID) {
        return rootService.generateRoutesPath(options.isSSR || false);
      }
    },
  };
}
