import { useContextData } from "@runtime"
import { HeroComponent } from "../../component/hero";
import { FeatureComponent } from "../../component/feature";
import { FooterComponent } from "../../component/footer";

export function HomePage() {
  const { frontmatter } = useContextData();
  
  return (
    <div className = "px-24 pt-30 w-4/5 mx-auto my-0">
      <HeroComponent hero={frontmatter.hero} />
      <FeatureComponent features={frontmatter.features} />
      <FooterComponent footer={ frontmatter.footer } />
    </div>
  )
}