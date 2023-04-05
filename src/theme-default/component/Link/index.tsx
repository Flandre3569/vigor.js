import React from 'react';
import styles from "./index.module.scss"
interface LinkType {
  href?: string;
  children?: React.ReactNode;
  className?: string;
}

// Link组件
// Link组件是用来区分外部链接和内部链接的，
// 如果是外部链接，那么会直接转到响应的超链接位置。
// 如果是内部链接,则转到响应路由位置

// 用正则来判断是否是以http或https作为开头的，如果是这两者作为开头，则是外部链接
const EXTERNAL_URL = /^https?/

export function Link(props: LinkType) {
  const { href = "/", children, className = "" } = props;
  const isExternal = EXTERNAL_URL.test(href);

  // target和rel是a标签的两个属性
  // target的值为_blank时，会另外打开一个网页展示超链接
  // 在使用target时如果没有设置rel为noopener noreferrer会有安全风险，用来防止钓鱼网站
  const target = isExternal ? '_blank' : '';
  const rel = isExternal ? "noopener noreferrer" : undefined;

  return <a href={href} rel={rel} target={target} className={`${className} ${styles.link}`}>{ children } </a>
}