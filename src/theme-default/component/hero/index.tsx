import { Hero } from "types";
import { Button } from "../Button";

// hero组件
// hero组件是主页的标题介绍和图片展示。

// Hero Image通常指的是一种大尺寸横幅图片展示在网页上，
// 通常放在靠前并居中的位置。它囊括了网站中最重要的内容。 
// Hero image通常由图像和文本组成
export function HeroComponent(props: { hero: Hero }) {
  const { hero } = props;
  return (
    <div>
      <div>
        <div>
          <h1 className="text-6xl font-semibold">
            <span> {hero.name} </span>
          </h1>
          <p> { hero.text } </p>
          <p> { hero.tagline } </p>
        </div>
        <div flex="~">
          {hero.actions.map((action) => (
            <div key={action.link}>
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
      <div></div>
    </div>
  )
}