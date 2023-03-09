// import A from "../../docs/guide/a";
// import B from "../../docs/b";
// import Index from "../../docs/guide/index";
import { routes } from "vigor:routes";
import { useRoutes } from 'react-router-dom';

// 以下代码是展示路由结构，已经通过插件自动化生成了，所以不再需要手动添加。
// 自动化添加路由的插件会根据目录结构创建路由，再转化为相应代码。
// const routes = [
//   {
//     path: "/guide",
//     element: <Index />
//   },
//   {
//     path: "/guide/a",
//     element: <A />
//   },
//   {
//     path: "/b",
//     element: <B />
//   }
// ]

export const Content = () => {
  console.log(routes);
  const rootElement = useRoutes(routes);
  return rootElement;
}