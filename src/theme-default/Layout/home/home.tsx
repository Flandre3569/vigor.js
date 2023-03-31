import { useContextData } from "@runtime"
import { HeroComponent } from "../../component/hero";

export function HomePage() {
  const { frontmatter } = useContextData();
  
  return (
    <div className = "px-24 pt-20 pb-10">
      <HeroComponent hero={frontmatter.hero} />
    </div>
  )
}