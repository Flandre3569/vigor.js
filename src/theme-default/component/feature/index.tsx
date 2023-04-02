import Feature from "@types";
import styles from "./index.module.scss";

export function FeatureComponent(props: {features: Feature[]}) { 
  
  return (
    <div flex="~ wrap" justify="between" pt="20">
      {
        props.features.map((feature) => {
          const {
            title,
            details,
            icon = ""
          } = feature;
          return (
            <div key={title} border="rounded-md" pb="1.3%" w="32.4%">
            <article p="6" className={styles.bg} h-full="true" >
                <div className={`flex-center text-3xl w-13 h-11 ${styles.iconBg}`} border="rounded-xl solid">{ icon }</div>
              <h2 className="font-semibold py-4">{ title }</h2>
              <p className="text-3.5 font-medium opacity-90">{ details }</p>
            </article>
          </div>
          )
        })
      }
    </div>
  )
}