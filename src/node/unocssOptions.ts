import { VitePluginConfig } from "unocss/vite";
import { presetAttributify, presetIcons, presetWind } from "unocss";

const options: VitePluginConfig = {
  presets: [presetAttributify(), presetIcons(), presetWind()],
};

export default options;
