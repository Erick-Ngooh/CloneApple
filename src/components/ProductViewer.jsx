import useMacBookStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { BoxGeometry } from "three";

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacBookStore();

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>

      <Canvas id="canvas" camera={{position: [1, 1, 1], fov: 3, near: 0.1, far: 100}}>
        <mesh position={[0, 0, 0]} scale={scale}>
          <boxGeometry />
          <meshBasicMaterial color={color}/>
        </mesh>
        <OrbitControls/>
      </Canvas>

      <div className="controls">
        <p className="info">
          Macbook Pro | Available in 14" & 16" in Space Gray & Dark colors
        </p>

        <div className="flex-center gap-6">
          <div className="color-control">
            <div
              className={clsx(
                "bg-neutral-300",
                color === "#adb5bd" && "active"
              )}
              onClick={() => setColor("#adb5bd")}
            />

            <div
              className={clsx(
                "bg-neutral-900",
                color === "#2E2C2E" && "active"
              )}
              onClick={() => setColor("#2E2C2E")}
            />
          </div>

          <div className="size-control">
            <div
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
              onClick={() => setScale(0.06)}
            >
              14 in.
            </div>

            <div
              className={clsx(
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
              onClick={() => setScale(0.08)}
            >
              16 in.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductViewer;