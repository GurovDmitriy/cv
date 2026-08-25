import Link from "@docusaurus/Link"
import { CONTENT } from "@site/src/config/content"
import Heading from "@theme/Heading"
import clsx from "clsx"
import styles from "./ContainerHeader.styles.module.css"

export function ContainerHeader() {
  return (
    <header className={clsx("hero", styles.hero)}>
      <div className="container">
        <Heading as="h1" className={clsx("hero__title", styles.title)}>
          {CONTENT.title}
        </Heading>
        <p className={clsx("hero__subtitle", styles.tagline)}>
          {CONTENT.tagline}
        </p>
        <p className={clsx("text-marc-marquez", styles.description)}>
          {CONTENT.description}
          <br />
          {CONTENT.descriptionSecondary}
        </p>
        <div>
          <Link
            className="button button--secondary button--lg"
            to={CONTENT.ctaHref}
          >
            {CONTENT.cta}
          </Link>
        </div>
      </div>
    </header>
  )
}
