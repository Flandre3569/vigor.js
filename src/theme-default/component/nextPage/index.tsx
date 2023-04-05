import { useContextData } from "@runtime";
import { useLocation } from "react-router-dom";

export function getNextPageData() {
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


export function nextPage() {

}