import styles from "./index.module.scss";

export function NotFoundPage() {
  return (
    <div flex="~" h="full">
      <div w="1/2" h="full">
        <h1 className={styles.h1}>404</h1>
        <a
          inline-block=""
          border="1px solid brand"
          rounded="2xl"
          p="y-2 x-4"
          text="sm brand"
          font-medium=""
          href={'/'}
          aria-label="go to home"
          relative="~"
          className="left-58 top-20"
        >
          Take me home
        </a>
      </div>
      <div relative="~" className="top-10" >
        <img className="w-250 left-0" src="../../../../docs/public/404.png" alt="404" />
      </div>
    </div>
  )
}