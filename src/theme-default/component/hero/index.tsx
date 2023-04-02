import { Hero } from "types";
import { Button } from "../Button";

import styles from "./index.module.scss";

// hero组件
// hero组件是主页的标题介绍和图片展示。

// Hero Image通常指的是一种大尺寸横幅图片展示在网页上，
// 通常放在靠前并居中的位置。它囊括了网站中最重要的内容。 
// Hero image通常由图像和文本组成
export function HeroComponent(props: { hero: Hero }) {
  const { hero } = props;
  return (
    <div flex="~">
      <div className="w-1/2">
        <div>
          <h1 className="text-5xl font-semibold pb-5">
            <span className={styles.title}> {hero.name} </span>
          </h1>
          <p className="text-6xl font-semibold"> { hero.text } </p>
          <p className="text-2xl pt-3 pb-6 opacity-65"> { hero.tagline } </p>
        </div>
        <div flex="~">
          {hero.actions.map((action) => (
            <div key={action.link} className="pr-3">
              <Button
                type="a"
                text={action.text}
                href={action.link}
                theme={action.theme}
              />
            </div>
          ))}
        </div>
      </div>
      <div w="1/2" flex="center" >
        {
          hero.image && (
            <div>
              <img h="85" src={ hero.image.src } alt={ hero.image.alt } />
            </div>
          )
        }
      </div>
    </div>
  )
}