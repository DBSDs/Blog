import React from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useHistory } from "@docusaurus/router";

const FeatureList = [
  {
    title: "博客",
    Svg: require("@site/static/img/blog.svg").default,
    description: <>欢迎来到我的博客，该博客还正在持续更新中...</>,
    href: "/docs/intro",
  },
  {
    title: "小工具",
    Svg: require("@site/static/img/Tools.svg").default,
    description: (
      <>我将会将一些构建网站的常用小工具集成到我的博客上，以便使用...</>
    ),
    href: null,
  },
  {
    title: "其他",
    Svg: require("@site/static/img/WindowsTerminal.svg").default,
    description: <>其他模块正在思考中...</>,
    href: null,
  },
];

function Feature({ Svg, title, description, href }) {
  const history = useHistory();
  return (
    <div
      className={clsx("col col--4", styles.svgBlock)}
      onClick={() => {
        if (href) {
          history.push(href);
        }
      }}
    >
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
