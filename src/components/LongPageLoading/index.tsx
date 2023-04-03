import clsx from "clsx";
import React from "react";
import * as THREE from "three";

import styles from "./index.module.scss";

type Tindex = {
  loadingText?: string;
};

const PageLoading: React.FC<Tindex> = (props) => {
  const { loadingText } = props;
  const wrapRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    let canvassize = 2000,
      length = 30,
      radius = 5.6,
      rotatevalue = 0.035,
      acceleration = 0,
      animatestep = 0,
      toend = false,
      pi2 = Math.PI * 2,
      group = new THREE.Group();

    const camera = new THREE.PerspectiveCamera(65, 1, 1, 10000);
    camera.position.z = 200;

    const scene = new THREE.Scene();
    // scene.add(new THREE.AxisHelper(30));
    scene.add(group);
    const vectorArray = [];
    for (let i = 0; i <= 100; i++) {
      const percent = i / 100;
      var x = length * Math.sin(pi2 * percent),
        y = radius * Math.cos(pi2 * 3 * percent),
        z: number,
        t: number;

      t = (percent % 0.25) / 0.25;
      t = (percent % 0.25) - (2 * (1 - t) * t * -0.0185 + t * t * 0.25);
      if (Math.floor(percent / 0.25) == 0 || Math.floor(percent / 0.25) == 2) {
        t *= -1;
      }
      z = radius * Math.sin(pi2 * 2 * (percent - t));

      vectorArray.push(new THREE.Vector3(x, y, z));
    }

    const mesh = new THREE.Mesh(
      new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(vectorArray, closed),
        200,
        1.1,
        2,
        true
      ),
      new THREE.MeshBasicMaterial({
        color: "#fff",
      })
    );
    group.add(mesh);

    const ringcover = new THREE.Mesh(
      new THREE.PlaneGeometry(50, 15, 1),
      new THREE.MeshBasicMaterial({
        color: 0xd1684e,
        opacity: 0,
        transparent: true,
      })
    );
    ringcover.position.x = length + 1;
    ringcover.rotation.y = Math.PI / 2;
    group.add(ringcover);

    const ring = new THREE.Mesh(
      new THREE.RingGeometry(4.3, 5.55, 32),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        opacity: 0,
        transparent: true,
      })
    );
    ring.position.x = length + 1.1;
    ring.rotation.y = Math.PI / 2;
    group.add(ring);

    // fake shadow
    (function () {
      for (let i = 0; i < 10; i++) {
        const plain = new THREE.Mesh(
          new THREE.PlaneGeometry(length * 2 + 1, radius * 3, 1),
          new THREE.MeshBasicMaterial({
            color: 0xd1684e,
            transparent: true,
            opacity: 0.13,
          })
        );
        plain.position.z = -2.5 + i * 0.5;
        group.add(plain);
      }
    })();

    const renderer = new THREE.WebGLRenderer({});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(document.body.clientWidth, canvassize);
    renderer.setClearColor("#d1684e");
    renderer.domElement.classList.add(styles.canvas);

    wrapRef.current?.appendChild(renderer.domElement);

    animate();

    function start() {
      toend = true;
    }

    function back() {
      toend = false;
    }

    function render() {
      animatestep = Math.max(
        0,
        Math.min(240, toend ? animatestep + 1 : animatestep - 4)
      );
      if (animatestep === 240) {
        back();
      }
      acceleration = easing(animatestep, 0, 1, 240);

      if (acceleration > 0.35) {
        let progress = (acceleration - 0.35) / 0.65;
        group.rotation.y = (-Math.PI / 2) * progress;
        group.position.z = 50 * progress;
        progress = Math.max(0, (acceleration - 0.97) / 0.03);
        mesh.material.opacity = 1 - progress;
        ringcover.material.opacity = ring.material.opacity = progress;
        ring.scale.x = ring.scale.y = 0.9 + 0.1 * progress;
      }

      renderer.render(scene, camera);
    }

    function animate() {
      mesh.rotation.x += rotatevalue + acceleration;
      render();
      requestAnimationFrame(animate);
    }

    function easing(t: number, b: number, c: number, d: number) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
      return (c / 2) * ((t -= 2) * t * t + 2) + b;
    }

    document.body.addEventListener("click", start, false);
    // $body.addEventListener("touchstart", start, false);
    // $body.addEventListener("mouseup", back, false);
    // $body.addEventListener("touchend", back, false);

    return () => {
      document.body.removeEventListener("click", start, false);
    };
  }, []);

  return (
    <React.Fragment>
      <div id="wrap" className={clsx(styles.wrap)} ref={wrapRef}></div>
      {!!loadingText && <p className={styles.text}>{loadingText}</p>}
    </React.Fragment>
  );
};

export default PageLoading;
