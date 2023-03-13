import { useState } from "react"
import { useContextData } from "@runtime";
import "uno.css"

export function Layout() {
  const pageData = useContextData();
  const { pageType } = pageData;
  const navContent = () => {
    if (pageType === "home") {
      return <div>主页内容</div>
    } else if (pageType === "doc") {
      return <div>正文内容</div>
    } else if (pageType === "404") {
      return <div>404页面</div>
    }
  }

  return <div>
    <div>Nav</div>
    {navContent()}
  </div>
}