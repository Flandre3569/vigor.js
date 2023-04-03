import { SidebarItem } from "types";
import { SidebarGroup } from "types";
import { Link } from '../Link/index';
import styles from "./index.module.scss";
interface SidebarType {
  sidebarData: SidebarGroup[];
  pathname: string;
}

export function Sidebar(props: SidebarType) {
  const { sidebarData, pathname } = props;
  
  // 渲染每个sidebar的item
  const renderItem = (item: SidebarItem) => {
    // 判断当前的路由是不是正在访问的页面路由
    const onFocus = item.link === pathname;
    return (
      <div pl="2" pt="2">
        <div className={`${onFocus ? styles.itemOnfocus : styles.item}`}>
          <Link href={item.link}>{ item.text }</Link>
        </div>
      </div>
    )
  }

  // 渲染一个sidebar组
  const renderItems = (item: SidebarGroup) => {
    return (
      <section key={item.text} className="divider-bottom pb-3">
        <div>
          <h2 className="font-semibold">{ item.text }</h2>
        </div>
        <div>
          {
            item.items?.map((item) => (
              <div key={item.link}>
                {renderItem(item)}
              </div>
            ))
          }
        </div>
      </section>
    )
  }

  // 渲染整个sidebar
  return (
    <aside className={styles.sidebar}>
      <nav>{sidebarData.map(renderItems)}</nav>
    </aside>
  )
}