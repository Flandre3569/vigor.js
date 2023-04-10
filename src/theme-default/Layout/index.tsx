import { useState } from "react"
import { useContextData } from "@runtime";

// 引入样式基础配置
import "../styles/base.css";
import "../styles/vars.css";
import "uno.css"

// 页面
import { Nav } from "../component/nav";
import { HomePage } from "./home/home";
import { DocPage } from "./doc/doc";
import { NotFoundPage } from "./notFound/index";

export function Layout() {
  const pageData = useContextData();
  const { pageType } = pageData;
  const Content = () => {
    if (pageType === "home") {
      return <HomePage />
    } else if (pageType === "doc") {
      return <DocPage />
    } else if (pageType === "404") {
      return <NotFoundPage />
    }
  }

  return <div>
    <Nav />
    { Content() }
  </div>
}