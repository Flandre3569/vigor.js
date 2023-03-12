import { pluginMdxRollup } from "./pluginMdxRollup";
import { Plugin } from "vite";

export async function pluginMdx(): Promise<Plugin[]> {
  return [await pluginMdxRollup()];
}
