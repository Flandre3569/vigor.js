import { SiteConfig } from "types/index";
import { Plugin } from "vite";

const SITE_DATA_ID = "vigor:site-data";

export function pluginConfig(config: SiteConfig): Plugin {
  return {
    name: "vigor:site-data",
    resolveId(id) {
      if (id === SITE_DATA_ID) {
        // 在vite中一个虚拟模块会在前面加一个'\0'，这算是一个约定
        return "\0" + SITE_DATA_ID;
      }
    },
    load(id) {
      if (id === "\0" + SITE_DATA_ID) {
        return `export default ${JSON.stringify(config.siteData)}`;
      }
    },
  };
}
