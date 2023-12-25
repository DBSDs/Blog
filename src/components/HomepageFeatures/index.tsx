import React from "react";
import { Typography } from "antd";
import { useHistory } from "@docusaurus/router";
import * as THREE from "three";
import { createNoise2D, createNoise3D, createNoise4D } from "simplex-noise";
import alea from "alea";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { gsap } from "gsap";

import styles from "./index.module.scss";

const conf = {
  fov: 75,
  cameraZ: 75,
  xyCoef: 50,
  zCoef: 10,
  lightIntensity: 0.9,
  ambientColor: 0x000000,
  light1Color: 0x0e09dc,
  light2Color: 0x1cd1e1,
  light3Color: 0x18c02c,
  light4Color: 0xee3bcf,
  color: 0xffffff,
  objectWidth: 12,
  objectThickness: 3,
  shadow: false,
  perspective: 75,
};

export default function HomepageFeatures() {
  let renderer, scene, camera;
  let width, height, cx, cy, wWidth, wHeight;
  let light1, light2, light3, light4;
  const TMath = THREE.MathUtils;
  let objects = [];
  let geometry;
  let plane;
  let nx, ny;

  const { push } = useHistory();
  const [loading, setLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    App();

    function App() {
      const seed = "seed";
      const simplex = {
        noise2D: createNoise2D(alea(seed)),
        noise3D: createNoise3D(alea(seed)),
        noise4D: createNoise4D(alea(seed)),
      };
      const mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const mousePosition = new THREE.Vector3();
      const raycaster = new THREE.Raycaster();

      init();

      function init() {
        renderer = new THREE.WebGLRenderer({
          canvas: document.getElementById("background"),
          antialias: true,
          alpha: true,
        });
        camera = new THREE.PerspectiveCamera(conf.fov);
        camera.position.z = conf.cameraZ;

        updateSize();
        window.addEventListener("resize", updateSize, false);

        document.addEventListener("mousemove", (e) => {
          const v = new THREE.Vector3();
          camera.getWorldDirection(v);
          v.normalize();
          mousePlane.normal = v;
          raycaster.ray.intersectPlane(mousePlane, mousePosition);
        });

        initScene();
        animate();
      }

      function initScene() {
        scene = new THREE.Scene();
        initLights();

        let mat = new THREE.MeshLambertMaterial({
          color: 0xffffff,
          side: THREE.DoubleSide,
        });
        let geo = new (THREE as any).PlaneBufferGeometry(
          wWidth,
          wHeight,
          wWidth / 2,
          wHeight / 2
        );
        plane = new THREE.Mesh(geo, mat);
        scene.add(plane);

        plane.rotation.x = -Math.PI / 2 - 0.2;
        plane.position.y = -25;
        camera.position.z = 60;
      }

      function animate() {
        requestAnimationFrame(animate);

        animatePlane();
        animateLights();

        renderer.render(scene, camera);
      }

      function animatePlane() {
        const gArray = plane.geometry.attributes.position.array;
        const time = Date.now() * 0.0002;
        for (let i = 0; i < gArray.length; i += 3) {
          gArray[i + 2] =
            simplex.noise4D(
              gArray[i] / conf.xyCoef,
              gArray[i + 1] / conf.xyCoef,
              time,
              0
            ) * conf.zCoef;
        }
        plane.geometry.attributes.position.needsUpdate = true;
      }

      function animateLights() {
        const time = Date.now() * 0.001;
        const d = 50;
        light1.position.x = Math.sin(time * 0.1) * d;
        light1.position.z = Math.cos(time * 0.2) * d;
        light2.position.x = Math.cos(time * 0.3) * d;
        light2.position.z = Math.sin(time * 0.4) * d;
        light3.position.x = Math.sin(time * 0.5) * d;
        light3.position.z = Math.sin(time * 0.6) * d;
        light4.position.x = Math.sin(time * 0.7) * d;
        light4.position.z = Math.cos(time * 0.8) * d;
      }

      function updateSize() {
        width = window.innerWidth;
        cx = width / 2;
        height = window.innerHeight;
        cy = height / 2;
        if (renderer && camera) {
          renderer.setSize(width, height);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          const wsize = getRendererSize();
          wWidth = wsize[0];
          wHeight = wsize[1];
        }
      }

      function getRendererSize() {
        const cam = new THREE.PerspectiveCamera(camera.fov, camera.aspect);
        const vFOV = (cam.fov * Math.PI) / 180;
        const height = 2 * Math.tan(vFOV / 2) * Math.abs(conf.cameraZ);
        const width = height * cam.aspect;
        return [width, height];
      }

      init2();

      function init2() {
        geometry = new THREE.BoxGeometry(
          conf.objectWidth,
          conf.objectWidth,
          conf.objectThickness
        );
      }
    }
  }, []);

  function initLights2() {
    let light = new THREE.PointLight(0xffffff);
    light.position.z = 1000;
    scene.add(light);
  }

  function initLights() {
    const r = 30;
    const y = 10;
    const lightDistance = 500;

    light1 = new THREE.PointLight(
      conf.light1Color,
      conf.lightIntensity,
      lightDistance
    );
    light1.position.set(0, y, r);
    scene.add(light1);
    light2 = new THREE.PointLight(
      conf.light2Color,
      conf.lightIntensity,
      lightDistance
    );
    light2.position.set(0, -y, -r);
    scene.add(light2);
    light3 = new THREE.PointLight(
      conf.light3Color,
      conf.lightIntensity,
      lightDistance
    );
    light3.position.set(r, y, 0);
    scene.add(light3);
    light4 = new THREE.PointLight(
      conf.light4Color,
      conf.lightIntensity,
      lightDistance
    );
    light4.position.set(-r, y, 0);
    scene.add(light4);
  }

  function initObjects() {
    setLoading(true);
    scene = new THREE.Scene();
    scene.add(new THREE.AmbientLight(conf.ambientColor));
    initLights2();
    nx = Math.round(wWidth / conf.objectWidth) + 1;
    ny = Math.round(wHeight / conf.objectWidth) + 1;
    let mesh, x, y;
    for (let i = 0; i < nx; i++) {
      for (let j = 0; j < ny; j++) {
        let material = new THREE.MeshLambertMaterial({
          color: conf.color,
          transparent: true,
          opacity: 1,
        });
        mesh = new THREE.Mesh(geometry, material);
        x = -wWidth / 2 + i * conf.objectWidth;
        y = -wHeight / 2 + j * conf.objectWidth;
        mesh.position.set(x, y, 0);
        objects.push(mesh);
        scene.add(mesh);
      }
    }
    startAnim();
  }

  function startAnim() {
    objects.forEach((mesh) => {
      mesh.rotation.set(0, 0, 0);
      mesh.material.opacity = 1;
      mesh.position.z = 0;
      let delay = TMath.randFloat(1, 2);
      let rx = TMath.randFloatSpread(2 * Math.PI);
      let ry = TMath.randFloatSpread(2 * Math.PI);
      let rz = TMath.randFloatSpread(2 * Math.PI);
      gsap.to(mesh.rotation, 2, { x: rx, y: ry, z: rz, delay: delay });
      gsap.to(mesh.position, 2, {
        z: 80,
        delay: delay + 0.5,
        ease: "power1",
      });
      gsap.to(mesh.material, 2, { opacity: 0, delay: delay + 0.5 });
    });
    setTimeout(() => {
      push("/docs/intro");
    }, 3500);
  }
  React.useEffect(() => {}, []);
  return (
    <div style={{ position: "relative" }}>
      <canvas
        id="background"
        style={{ position: "absolute", top: 0, zIndex: "-1" }}
      ></canvas>
      {!loading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
          }}
        >
          <Typography.Title style={{ fontWeight: 900 }}>
            Op Chen 的个人网站
          </Typography.Title>
          <Button
            className={styles.btn}
            icon={<ArrowRightOutlined className={styles.icon} />}
            type="link"
            id="trigger"
            loading={loading}
            onClick={() => initObjects()}
          >
            点击进入
          </Button>
        </div>
      )}
    </div>
  );
}
