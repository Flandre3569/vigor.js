import { useContextData } from "@runtime";
import { NavItemsConfig } from "types";
import styles from "./index.module.scss";

// github链接地址
export const GITHUB_LINK_HREF = "https://github.com/Flandre3569/vigor.js";

function MenuItem(item: NavItemsConfig) {
  return (
    <div className="text-sm font-medium mx-3">
      <a href={item.link} className={styles.link}> {item.text} </a>
    </div>
  )
}

export function Nav() {
  const { siteData } = useContextData();
  const nav = siteData?.themeConfig?.nav || [];
  return (
    <header fixed="~" w="full">
      <div flex="~" justify="between" items="center" className="px-8 h-14 divider-bottom">
        <div>
          <a href="/" className="w-full h-full text-1rem flex items-center" hover="opacity-60">vigor.js</a>
      </div>
      <div flex="~">
          <div flex="~">
            {
              nav.map(item => (
                <MenuItem {...item} key={item.text} />
              ))
            }
          </div>
          <div>{ /*主题切换按钮*/ }</div>
          <div className={styles.socialLinkIcon}>
            <a href = { GITHUB_LINK_HREF } >
              <div className="i-carbon-logo-github w-5 h-5 fill-current"></div>
            </a> 
        </div>
      </div>
      </div>
    </header>
  )
}