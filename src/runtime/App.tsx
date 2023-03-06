import siteData from "vigor:site-data";
import { Layout } from "../theme-default/Layout";

export function App() {
  console.log("站点数据:", siteData);
  return <Layout />
}