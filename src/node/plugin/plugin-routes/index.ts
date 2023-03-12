import { Plugin } from "vite";
import { RouteService } from "./RouteService";

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
