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
import { Helmet } from "react-helmet-async";

export function Layout() {
  const pageData = useContextData();
  const { pageType, title } = pageData;
  const Content = () => {
    if (pageType === "home") {
      return <HomePage />
    } else if (pageType === "doc") {
      return <DocPage />
    } else {
      return <NotFoundPage />
    }
  }

  return <div>
    <Helmet>
      <title>{ title }</title>
    </Helmet>
    <Nav />
    <section>
      { Content() }
    </section>
  </div>
}