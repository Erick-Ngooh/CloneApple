import useMacBookStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import StudioLights from "./three/StudioLights";
import { useMediaQuery } from "react-responsive";
import ModelSwitcher from "./three/ModelSwitcher";


const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacBookStore();
  const isMobile = useMediaQuery({
    query: "(max-width: 1024px)"
  });

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>

      <Canvas id="canvas" camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100}}>
        <ModelSwitcher isMobile={isMobile} scale={scale}></ModelSwitcher>
        <StudioLights></StudioLights>
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