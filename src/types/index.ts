import { UserConfig as ViteUserConfig } from "vitest/config";

// 导航栏 -> 包括文本和链接
export interface NavItemsConfig {
  text: string;
  link: string;
}

// 侧边栏每个子栏
export type SidebarItem =
  | { text: string; link: string }
  | { text: string; link?: string; items: SidebarItem[] };

// 侧边栏组
export interface SidebarGroup {
  text?: string;
  items: SidebarItem[];
}

// 侧边栏
export interface SidebarConfig {
  [path: string]: SidebarGroup[];
}

// 页脚的配置
export interface FooterConfig {
  message?: string;
  copyright?: string;
}

// 主题配置
export interface ThemeConfig {
  nav?: NavItemsConfig[];
  sidebar?: SidebarConfig;
  footer?: FooterConfig;
}

// 用户配置
export interface UserConfig {
  title?: string;
  description?: string;
  themeConfig?: ThemeConfig;
  vite?: ViteUserConfig;
}

// 网站配置
export interface SiteConfig {
  root: string;
  configPath: string;
  siteData: UserConfig;
}

export type PageType = "home" | "doc" | "custom" | "404";

export interface Frontmatter {
  title?: string;
  description?: string;
  // 页面类型
  pageType?: PageType;
  // 侧边栏
  sidebar?: boolean;
  // 大纲栏
  outline?: boolean;
}

export interface TocTree {
  id: string;
  text: string;
  depth: number;
}

// 传递给前端的信息
export interface PageData {
  // 网站的配置信息
  siteData: UserConfig;
  // 当前页面的路由
  pagePath: string;
  // 当前页面的元数据
  frontmatter: Frontmatter;
  pageType: PageType;
  toc?: TocTree[];
}
