import { FooterConfig } from "types";
import styles from "./index.module.scss";

export function FooterComponent(props: { footer: FooterConfig }) {
  const { footer } = props;
  
  return (
    <div className={`py-5 ${styles.footer}`}>
      <p className="flex-center">{footer.message}</p>
      <span className="flex-center">Copyright © 2023-present {footer.copyright}</span>
    </div>
  )
}