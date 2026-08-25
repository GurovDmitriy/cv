import { CONTENT } from "@site/src/config/content"
import { ContainerHeader } from "@site/src/features/Header"
import Layout from "@theme/Layout"
import styles from "./index.styles.module.css"

export default function Home() {
  return (
    <Layout description={CONTENT.tagline}>
      <main className={styles.main}>
        <ContainerHeader />
      </main>
    </Layout>
  )
}
