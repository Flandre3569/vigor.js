import { useContextData } from "@runtime";
import { useLocation } from "react-router-dom";

import styles from "./index.module.scss";

export function getNextPageData() {
  // 拿到当前页面的路由
  const { pathname } = useLocation();
  const { siteData } = useContextData();

  const sidebar = siteData.themeConfig?.sidebar || {};
  const itemArray = [];

  // 把sidebar中的数据拍平并放到一个数组中
  Object.keys(sidebar).forEach((key) => {
    const itemGroup = sidebar[key] || [];
    itemGroup.forEach(group => {
      group.items.forEach(item => {
        itemArray.push(item);
      })
    })
  })  

  // 从sidebar数据的数组中拿到当前页面的索引号
  const pageIndex = itemArray.findIndex((item) => item.link === pathname);
  // 上一页就是索引号的上一个
  const prevPage = itemArray[pageIndex - 1] || null;
  // 下一页就是索引号的下一个
  const nextPage = itemArray[pageIndex + 1] || null;
  return {
    prevPage,
    nextPage
  }
}


export function NextPage() {
  const { prevPage, nextPage } = getNextPageData();

  return (
    <footer>
      <div flex="~" justify="between" className="py-5">
        <div>
          {
            prevPage && 
            <a href={prevPage.link} className={`${styles.prevPage}`}>
                <span mr="5" className={styles.prevPageTitle}>上一页</span>
                <span className={ styles.prevPageContent }>{ prevPage.text }</span>
            </a>
          }
        </div>
        <div>
          {
            nextPage && 
            <a href={nextPage.link} className={`${styles.nextPage}`}>
                <span mr="5" className={styles.nextPageTitle}>下一页</span>
                <span className={styles.nextPageContent }>{ nextPage.text} </span>
            </a>
          }
        </div>
      </div>
    </footer>
  )
}