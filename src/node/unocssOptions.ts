import { VitePluginConfig } from "unocss/vite";
import { presetAttributify, presetIcons, presetWind } from "unocss";

const options: VitePluginConfig = {
  presets: [presetAttributify(), presetIcons(), presetWind()],
  rules: [
    // 下面这种写法和此种写法是一样的，只不过用正则会更加灵活
    // [
    //   "divider-bottom",
    //   {
    //     "border-bottom": "1px solid var(--island-c-divider-light)"
    //   }
    // ]
    [
      /^divider-(\w+)$/,
      ([, w]) => ({
        [`border-${w}`]: "1px solid var(--vigor-c-divider-light)",
      }),
    ],
  ],
};

export default options;
