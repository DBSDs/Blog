import React from "react";
import * as Three from "three";

import Layout from "@theme/Layout";

type TEarth = {};

const Earth: React.FC<TEarth> = (props) => {
  const earthRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const scene = new Three.Scene();

    const camera = new Three.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new Three.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight - 60);
    earthRef.current?.appendChild(renderer.domElement);

    const lineTexture = new Three.TextureLoader().load(
      "/img/merge_from_ofoct.jpg"
    );
    const fillTexture = new Three.TextureLoader().load("/img/earth_1.png");
    const mapTexture = new Three.TextureLoader().load("/img/dot.png");
    const uniforms = {
      lineTexture: { value: lineTexture },
      fillTexture: { value: fillTexture },
      mapTexture: { value: mapTexture },
    };

    const geo = new Three.SphereGeometry(10, 100, 100);
    const shaderMaterial = new Three.ShaderMaterial({
      uniforms: uniforms,
      side: Three.DoubleSide,
      vertexShader: `
      precision highp float;
      varying vec2 vUv;
      varying vec3 vNormal;
      varying float _alpha;
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * mvPosition;
      }
      `,
      fragmentShader: `
      uniform sampler2D lineTexture;
      uniform sampler2D fillTexture;
      uniform sampler2D mapTexture;
      varying vec2 vUv;
      varying vec3 vNormal;
      varying float _alpha;
      void main() {
        vec4 lineColor = texture2D( lineTexture, vUv );
        vec4 fillColor = texture2D( fillTexture, vUv );
        // 由于我们希望得到一个球的两边亮一些的效果，
        // 就得借助球表面的向量在Z轴上的投影的大小来达到变化颜色的效果
        // vNormal代表每个垂直于球平面的向量，再点乘Z轴，因为摄像头是从Z向里看的，
        // 所以这里我们取(0.0, 0.0, 1.0)，Z轴
        float silhouette = dot(vec3(0.0, 0.0, 1.0) ,vNormal );
        lineColor = vec4(lineColor.rgb,1.0);
        float z = gl_FragCoord.z;
        if(lineColor.r <= 0.1) {
          if(fillColor.r <= 0.1) {
            float x = sin(vUv.x * 1000.0) * 0.5 + 0.5;
            float y = sin(vUv.y * 1000.0) * 0.5 + 0.5;
            vec4 mapColor = texture2D( mapTexture, vec2(x, y) );
            // 球面变化关联到颜色
             float c = pow(1.0 - abs(silhouette), 1.0);
             if(c < 0.2) {
               c = 0.2;
             }
             // lineColor = vec4(c,c,c, 1.0) * mapColor.rgb;
             lineColor = vec4(c,c,c, 1.0);
          } else {
             discard;
          }
        }
        gl_FragColor = vec4(lineColor.rgb * vec3(0.0,1.0,167.0 / 255.0), 1.0);
      }
  `,
      transparent: true,
    });
    const mesh = new Three.Mesh(geo, shaderMaterial);

    // const points = new Three.Points(geometry, material);

    // scene.add(points);

    scene.add(mesh);
    camera.position.z = 50;

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      // points.rotation.y += 0.01;
      // points.rotation.x += 0.01;
      // points.rotation.z += 0.01;
      // cube.rotation.x += 0.01;
      mesh.rotation.y += 0.001;
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return (
    <Layout>
      <div ref={earthRef} style={{ position: "absolute", zIndex: -1 }}></div>
    </Layout>
  );
};

export default Earth;
