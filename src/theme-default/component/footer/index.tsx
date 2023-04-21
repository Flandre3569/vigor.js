import { FooterConfig } from "types";

export function FooterComponent(props: { footer: FooterConfig }) {
  const { footer } = props;
  return (
    <div>
      <span>{footer.copyright}</span>
      <span>{footer.message}</span>
    </div>
  )
}