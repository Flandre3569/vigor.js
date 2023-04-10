import styles from "./index.module.scss";

export function NotFoundPage() {
  return (
    <div flex="~" h="full">
      <div w="1/2" h="full">
        <h1 className={styles.h1}>404</h1>
      </div>
      <div relative="~" className="top-10" >
        <img className="w-250 left-0" src="../../../../docs/public/404.png" alt="404" />
      </div>
    </div>
  )
}