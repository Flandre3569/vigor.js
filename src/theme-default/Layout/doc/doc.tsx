import { useContextData } from "@runtime";
import { useLocation } from "react-router-dom";
import { Sidebar } from "../../component/sidebar";
import { Content } from "@runtime";
import styles from "./index.module.scss";

export function DocPage() {
  const { siteData } = useContextData();
  const sidebarData = siteData.themeConfig?.sidebar || {};
  // 拿到当前具体处于哪个侧边栏的item中
  // 目的是获取到具体路径,然后对当前路径的导航栏保持高亮
  const { pathname } = useLocation();


  const matchedSidebarKey = Object.keys(sidebarData).find((key) => {
    if (pathname.startsWith(key)) {
      return true;
    }
  });

  const matchedSidebar = sidebarData[matchedSidebarKey] || [];

  return (
    <div flex="~" >
      <div w="1/4">
        <Sidebar sidebarData={matchedSidebar} pathname={pathname} />
      </div>
      <div pt="22" w="1/2" className={styles.vigorDoc} >
        <Content />
      </div>
    </div>
  );
}