import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import PageLoading from "../components/LongPageLoading/index";

import styles from "./index.module.scss";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <PageLoading />
      <div className={clsx(styles.container)}>
        <h1 className={clsx("hero__title", styles.word)}>{siteConfig.title}</h1>
        <p className={clsx("hero__subtitle", styles.word)}>
          {siteConfig.tagline}
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <p className={styles.info}>* 长按鼠标将有动画效果.</p>
    </Layout>
  );
}
