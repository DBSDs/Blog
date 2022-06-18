import React, { useEffect } from "react";

import { useLocation } from "@docusaurus/router";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

const Base64Compute = () => {
  const [code, setCode] = React.useState<string>(null);
  const [out, setOut] = React.useState<string>(null);
  return (
    <Layout>
      <div className={styles.box}>
        <div className={styles.row}>
          <textarea
            rows={10}
            className={styles.textarea}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
        </div>
        <div className={styles.row}>
          <button
            className={styles.button}
            style={{ marginRight: "16px" }}
            onClick={() => {
              setOut(window.btoa(code));
            }}
          >
            加密
          </button>
          <button
            className={styles.button}
            onClick={() => {
              setOut(window.atob(code));
            }}
          >
            解密
          </button>
        </div>
        <div className={styles.row}>
          <textarea
            className={styles.textarea}
            rows={10}
            disabled
            value={out}
          ></textarea>
        </div>
      </div>
    </Layout>
  );
};

export default Base64Compute;
