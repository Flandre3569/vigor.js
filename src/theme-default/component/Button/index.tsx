import React from "react";
import { Link } from "../Link";
import styles from "./index.module.scss";

interface ButtonTypes {
  type?: string;
  size?: "small" | "medium" | "big";
  text: string;
  theme: "brand" | "alt";
  href: string;
  external?: boolean;
  className?: string;
}

// 按钮组件
// 按钮组件主要有设定大小、主题和内外链接的自定义
export function Button(props: ButtonTypes) {
  const {
    theme = "brand",
    href = "/",
    size = "big",
    external = false,
    className = ""
  } = props;

  // 如果是外部链接
  let type: string | typeof Link | null = null;
  if (props.type === "button") {
    type = "button"
  } else if (props.type === "a") {
    type = external ? "a" : Link;
  }
 
  return React.createElement(
    type ?? "a",
    {
      href,
      className: `${styles.button} ${styles[size]}`
    },
    props.text
  )
}