import useMacBookStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { SphereGeometry } from "three";


const ProductViewer = () => {
    const {color, scale, setColor, setScale} = useMacBookStore();
    console.log("scale:", scale);
console.log("type:", typeof scale);
console.log("14 actif:", scale === 0.06);
console.log("16 actif:", scale === 0.08);   

    return (
        <section id="product-viewer">
            <h2>Take a closer look.</h2>
            <Canvas id="canvas">
                <mesh position={[1, 1, 1]} scale={scale}>
                    <SphereGeometry></SphereGeometry>
                    <meshBasicMaterial color={color}></meshBasicMaterial>
                </mesh>
            </Canvas>
            <div className="controls">
                <p className="info">Macbook Pro | Available in 14" & 16" in Space Gray & Dark colors</p>
                <div className="flex-center gap-6">
                    <div className="color-control">
                        <div className={clsx("bg-neutral-300", color === "#adb5bd" && "active")} onClick={() => setColor("#adb5bd")}></div>
                        <div className={clsx("bg-neutral-900", color === "#2E2C2E" && "active")} onClick={() => setColor("#2E2C2E")}></div>
                    </div>
                    <div className="size-control">
                        <div className={scale === 0.06
                        ? "bg-white! text-black!" : "bg-transparent text-white"} onClick={() => setScale(0.06)}>14 in.</div>
                        <div className={scale === 0.08
                        ? "bg-white text-black" : "bg-transparent text-white"} onClick={() => {setScale(0.08)}}>16 in.</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductViewer;