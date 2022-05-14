import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "博客",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>欢迎来到我的博客，这是一个无人知晓的角落。该博客还正在持续更新中...</>
    ),
  },
  {
    title: "小工具",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>我将会将一些构建网站的常用小工具集成到我的博客上，以便使用...</>
    ),
  },
  {
    title: "其他",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>其他模块正在思考中...</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
