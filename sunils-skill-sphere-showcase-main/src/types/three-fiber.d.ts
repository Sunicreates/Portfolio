
import { extend } from '@react-three/fiber'
import * as THREE from 'three'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any
      mesh: any
      sphereGeometry: any
      meshStandardMaterial: any
      meshBasicMaterial: any
      torusGeometry: any
      ambientLight: any
      pointLight: any
    }
  }
}
