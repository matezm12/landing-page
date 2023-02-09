import { Vector2, Vector3, LatheGeometry, BufferAttribute, Color } from "three";
import { useControls } from "leva";
import * as buffer from "maath/three";
import React, { useEffect, useRef, useMemo } from "react";
import { useFrame, extend, useThree } from "@react-three/fiber";
import { Color as ColorLayer } from "lamina";
import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";
import Displace from "./lib/lamina/Displace";
import LayerMaterial from "./lib/lamina/LayerMaterial";
extend({ Displace });

const ParticleLandscape = () => {
  const displaceRef = useRef();
  const pointsRef = useRef();

  useEffect(() => {
    const pointCount = 8;
    const pointOffset = 0;
    const geometries = [];
    for (let j = 0; j < 8; j++) {
      const points = [];
      for (let i = 0; i < pointCount; i++) {
        const idx = (i + 1) / pointCount;
        points.push(new Vector2(idx + pointOffset + j, 0));
      }

      geometries.push(new LatheGeometry(points, 150 * (j + 1)));
    }

    const geometry = mergeBufferGeometries(geometries);
    const scaleMultArray = Array(geometry.attributes.position.count)
      .fill(0)
      .map((_, i) => (i % 2 ? 0 : 1));
    geometry.setAttribute(
      "scaleMult",
      new BufferAttribute(new Float32Array(scaleMultArray, 1), 1)
    );

    const normalCross = new Vector3(0, 1, 0);
    const positionArray = buffer.bufferToVectors(
      geometry.attributes.position.array
    );
    let normalArray = buffer.bufferToVectors(geometry.attributes.normal.array);
    normalArray = normalArray.map((o, i) => {
      const crossVec = positionArray[i].cross(normalCross);
      return crossVec.lerp(crossVec.clone().normalize(), 0.75);
    });
    geometry.attributes.normal.array = buffer.vectorsToBuffer(normalArray);
    pointsRef.current.geometry = geometry;
  }, []);

  useFrame(({ clock }) => {
    displaceRef.current.time = Math.sin(clock.elapsedTime * 0.025);
  });

  const { noiseScale, noiseStrength, noiseStrengthHeight } = useControls({
    noiseScale: 0.5,
    noiseStrength: 2,
    noiseStrengthHeight: 0.5,
  });
  const { uFocus, uBlur } = useControls({
    uFocus: { value: 4, min: 3, max: 7, step: 0.01 },
    uBlur: { value: 1.3, min: 0, max: 6, step: 0.1 },
  });

  const { size, viewport } = useThree();
  useEffect(() => {
    ref.current.uniforms.viewport.value = (size.height * viewport.dpr) / 1000;
  }, [size, viewport]);

  const uniforms = useMemo(
    () => ({
      uFocus: { value: uFocus },
      uBlur: { value: uBlur },
      viewport: { value: (size.height * viewport.dpr) / 1000 },
    }),
    []
  );

  const ref = useRef();
  useEffect(() => {
    ref.current.uniforms.uFocus.value = uFocus;
    ref.current.uniforms.uBlur.value = uBlur;
  }, [uFocus, uBlur]);

  return (
    <points ref={pointsRef}>
      <LayerMaterial
        ref={ref}
        transparent
        uniforms={uniforms}
        depthTest={false}
        toneMapped={false}
      >
        {/* Brightness */}
        <ColorLayer color={new Color("#A114C3").multiplyScalar(15)} />
        <displace
          strength={noiseStrength}
          strengthHeight={noiseStrengthHeight}
          scale={noiseScale}
          ref={displaceRef}
        />
      </LayerMaterial>
    </points>
  );
};

export default ParticleLandscape;
