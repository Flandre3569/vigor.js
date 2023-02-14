import { UserConfig as ViteUserConfig } from "vitest/config";

// 导航栏 -> 包括文本和链接
export interface NavItemsConfig {
  text: string;
  link: string;
}

// 侧边栏每个子栏
export interface SidebarItem {
  text: string;
  link: string;
}

// 侧边栏组
export interface SidebarGroup {
  text: string;
  items: SidebarItem[];
}

// 侧边栏
export interface SidebarConfig {
  [path: string]: SidebarGroup[];
}

// 页脚的配置
export interface FooterConfig {
  message: string;
}

// 主题配置
export interface ThemeConfig {
  nav?: NavItemsConfig[];
  sidebar?: SidebarConfig;
  footer?: FooterConfig;
}

// 用户配置
export interface UserConfig {
  title: string;
  description: string;
  themeConfig: ThemeConfig;
  vite: ViteUserConfig;
}
