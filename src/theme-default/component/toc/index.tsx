import { useContextData } from "@runtime"
import { useRef } from "react";
import { TocTree } from "types";
import styles from "./index.module.scss";

import { scrollToTarget } from "./activeScroll";

export interface TocType {
  headers: TocTree[]
}

export function TocComponent(props: TocType) {
  const { headers = [] } = props;
  // 大纲的长度
  const tocLength = headers.length > 0;

  const markRef = useRef<HTMLDivElement>(null);

  const renderToc = (tocTree: TocTree) => {
    return (
      <li key={tocTree.id}>
        <a
          href={`#${tocTree.id}`}
          className={`block leading-7 ${styles.tocLink} opacity-70`}
          transition="color duration-300"
          style={{
            paddingLeft: (tocTree.depth - 2) * 12
          }}
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById(tocTree.id);
            target && scrollToTarget(target, false);
          }}
        >
          {tocTree.text}
        </a>
      </li>
    )
  }
  return (
    <div className="">
      <div>
        {
          tocLength && (
            <div id="toc-container" className="relative divider-left pl-4 text-13px font-medium">
              <div
                ref={markRef}
                id="toc-maker" >
              </div>
              <div leading-7="~" text="13px" font="semibold">On this Page</div>
              <nav>
                <ul relative="~">{ headers.map(renderToc) }</ul>
              </nav>
            </div>
          )
        }
      </div>
    </div>
  )
}