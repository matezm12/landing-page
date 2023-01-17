import React, { useRef } from "react";
import { composable, modules } from "material-composer-r3f";
import { upTo, between } from "randomish";
import { OneMinus } from "shader-composer";
import { Vector2, Vector3, Color, DoubleSide, MathUtils } from "three";
import {
  Emitter,
  InstancedParticles,
  useParticleLifetime,
  useParticleAttribute,
} from "vfx-composer-r3f";
import { useFrame, useThree } from "@react-three/fiber";

const maxHeight = 5;
const tmpVec3 = new Vector3();
const amount = Array(100)
  .fill(0)
  .map(() => new Vector2(between(-10, 10), between(0, 10)));

function smoothstep(min, max, value) {
  var x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

const ParticleRising = () => {
  const { camera } = useThree();
  const lifetime = useParticleLifetime();
  const velocity = useParticleAttribute(() => new Vector3());
  const group = useRef(null);
  useFrame(() => {
    group.current.children.forEach((o) => {
      o.position.y += 0.01;
      o.position.y %= maxHeight;
      const screenspaceHeight =
        (o.position.clone().project(camera).y + 1) * 0.5;
      const scale_bottom = smoothstep(0.2, 0.25, screenspaceHeight);
      const scale_top = smoothstep(0.025, 0.1, 1 - screenspaceHeight);
      o.scale.setScalar(scale_bottom * scale_top);
    });
  });

  return (
    <InstancedParticles capacity={5_000}>
      <circleGeometry args={[0.005, 16]} />
      <composable.meshBasicMaterial
        transparent
        side={DoubleSide}
        toneMapped={false}
        depthWrite={false}
        color={new Color("#A114C3").multiplyScalar(10)}
      >
        <modules.Billboard />
        <modules.Velocity direction={velocity} time={lifetime.age} />
        <modules.Acceleration
          direction={new Vector3(0, -1, 0)}
          time={lifetime.age}
        />
        <modules.Alpha alpha={OneMinus(lifetime.progress)} />
        <modules.Lifetime {...lifetime} />
      </composable.meshBasicMaterial>

      <group ref={group}>
        {amount.map((o, i) => {
          return (
            <mesh
              key={i}
              position={[
                o.x,
                MathUtils.seededRandom(i * 10000) * maxHeight,
                o.y,
              ]}
            >
              <sphereGeometry args={[0.01]} />
              <meshBasicMaterial
                color={new Color("#48CCD0").multiplyScalar(2.5)}
                toneMapped={false}
              />

              <Emitter
                rate={MathUtils.seededRandom(i * 10000) * 15 + 5}
                setup={({ mesh, position }) => {
                  position.add(
                    tmpVec3.randomDirection().multiplyScalar(upTo(0.05))
                  );
                  lifetime.write(mesh, between(0.75, 1.5));
                  velocity.write(mesh, (v) =>
                    v.randomDirection().multiplyScalar(upTo(0.1))
                  );
                }}
              />
            </mesh>
          );
        })}
      </group>
    </InstancedParticles>
  );
};

export default ParticleRising;
