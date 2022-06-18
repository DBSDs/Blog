import React, { useEffect } from "react";

import { useLocation } from "@docusaurus/router";
import Layout from "@theme/Layout";

import Switch from "../../../../static/svg/switch.svg";
import moment from "moment";
import styles from "./index.module.css";

const TimeStamp = () => {
  const [sec, setSec] = React.useState<string>(null);
  const [secTpye, setSecType] = React.useState<string>("second");
  return (
    <Layout>
      <div className={styles.box}>
        <div className={styles.row}>
          <input
            className={styles.input}
            onChange={(e) => {
              setSec(e.target["value"]);
            }}
          />
          <select
            className={styles.select}
            onChange={(e) => {
              setSecType(e.target.value);
            }}
          >
            <option value="second">秒</option>
            <option value="milesecond">毫秒</option>
          </select>
        </div>
        <div className={styles.row}>
          <button className={styles.button}>转换</button>
        </div>
        <div className={styles.row}>
          <div>输出：</div>
          <div>
            {moment(
              secTpye === "second" ? Number(sec) * 1000 : Number(sec)
            ).format("YYYY-MM-DD HH:mm:ss")}
          </div>
        </div>
      </div>

      {React.useMemo(() => {
        return <Timer />;
      }, [])}
    </Layout>
  );
};

const Timer = () => {
  const [force, setForce] = React.useState<number>(0);
  const [isStop, setIsStop] = React.useState<boolean>(false);
  const interval = React.useRef<NodeJS.Timer>(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setForce(new Date().getTime());
    }, 1000);
    return () => clearInterval(interval.current);
  }, []);

  return (
    <div className={styles.box}>
      <div className={styles.row}>
        <div className={styles.label}>当前的浏览器时间:</div>
        <div>{moment().format("YYYY-MM-DD HH:mm:ss")}</div>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>当前的时间戳unix:</div>
        <div>{moment().unix()}</div>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>当前的时间戳ms:</div>
        <div>{new Date().getTime()}</div>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => {
            setIsStop(!isStop);
            if (isStop) {
              interval.current = setInterval(() => {
                setForce(new Date().getTime());
              }, 1000);
            } else {
              clearInterval(interval.current);
            }
          }}
        >
          {isStop ? "重置" : "暂停"}
        </button>
      </div>
    </div>
  );
};

export default TimeStamp;
