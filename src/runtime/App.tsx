import { matchRoutes } from "react-router-dom";
import { routes } from "vigor:routes";
import siteData from "vigor:site-data";
import { Layout } from "../theme-default/Layout";
import { Route } from '../node/plugin/plugin-routes/index';
import { PageData } from "types";

export async function initPageData(routePath: string): Promise<PageData> {
  const matched = matchRoutes(routes, routePath);

  if (matched) {
    const route = matched[0].route as Route;
    // 获取路由组件编译后的模块内容
    const moduleInfo = await route.preload();
    console.log(moduleInfo);
    return {
      pageType: moduleInfo?.frontmatter?.pageType ?? "doc",
      siteData: siteData,
      frontmatter: moduleInfo.frontmatter,
      pagePath: routePath,
    }
  }

  return {
    pageType: "404",
    siteData,
    pagePath: routePath,
    frontmatter: {}
  }
}

export function App() {
  return <Layout />
}