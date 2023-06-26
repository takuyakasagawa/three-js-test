import { Float, Html, PresentationControls, useGLTF } from '@react-three/drei';
import './App.css'
import {Canvas} from "react-three-fiber"

function App() {

  const macbook = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  )

  const coffee = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cup-tea/model.gltf"
  )

  const donut = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/donut-sprinkles/model.gltf"
  )

  return (
    <div>
    <Canvas camera={{ fov:45, near:0.1, far:200 }}>
      <color args={["#034113"]} attach="background"/>
      {/* <OrbitControls/> */}
      <ambientLight />
      <directionalLight intensity={1.4}/>
      {/* <mesh>
        <boxGeometry/>
        <meshStandardMaterial/>
      </mesh> */}
      <PresentationControls 
        global
        config={{mass:3,tenstion : 400}}
        snap={{snap:2,tension:200}}
      >
      <Float rotationIntensity={1.1}>
        <rectAreaLight 
          color={"#034113"} 
          intensity={100} 
          rotation={[0.1,Math.PI,0]}
          width={2.0}
          height={1.0}
          position={[0,0,0]}
          />
        <primitive object={macbook.scene}position={[0,-0.5,0]}>
          <Html position={[0,1.56,-1.4]} 
            distanceFactor={1.5}
            rotation-x={-0.25}
            transform
            wrapperClass='htmlScreen'
          >
          <iframe src='https://brew.sh/index_ja' frameboder="0"></iframe>
          </Html>
        </primitive>
      </Float>

      <Float rotationIntensity={1.1}>
        <rectAreaLight 
          color={"#034113"} 
          intensity={100} 
          rotation={[0.1,Math.PI,0]}
          width={2.0}
          height={1.0}
          position={[0,0,0]}
          />
        <primitive 
          object={coffee.scene} 
          position={[-2.4,-0.1,-0.1]}
          scale={[2,2,2]}
        >
        </primitive>
      </Float>

      <Float rotationIntensity={1.1}>
        <rectAreaLight 
          color={"#034113"} 
          intensity={100} 
          rotation={[0.1,Math.PI,0]}
          width={2.0}
          height={1.0}
          position={[0,0,0]}
          />
        <primitive 
          object={donut.scene} 
          position={[2.4,-0.1,0.2]}
          scale={[3,3,3]}
          rotation-x={0.4}
        >
        </primitive>
      </Float>

      </PresentationControls>
    </Canvas>
    
  </div>
  );
}

export default App
