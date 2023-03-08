import { pluginMdxRollup } from "./pluginMdxRollup";

export function createMdxPlugin() {
  return [pluginMdxRollup()];
}
