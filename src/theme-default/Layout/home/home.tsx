import { useContextData } from "@runtime"
import { HeroComponent } from "../../component/hero";
import { FeatureComponent } from "../../component/feature";

export function HomePage() {
  const { frontmatter } = useContextData();
  
  return (
    <div className = "px-24 pt-20 pb-10">
      <HeroComponent hero={frontmatter.hero} />
      <FeatureComponent features={frontmatter.features} />
    </div>
  )
}