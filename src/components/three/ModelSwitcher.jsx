import { OrbitControls } from "@react-three/drei";
import { ModelMacBoock14 } from "../models/Macbook-14";

const ModelSwitcher = (props) => {
    return (
        <group>
            <ModelMacBoock14 scale={props.scale} position={[0, 0, 0]} />
            <OrbitControls enableZoom={true}/>
        </group>
    );
}

export default ModelSwitcher;