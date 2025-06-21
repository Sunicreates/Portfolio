import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const SkillsSphere = () => {
  const groupRef = useRef<THREE.Group>(null);
  const skills = [
    { name: "React", color: "#61DAFB", level: 90 },
    { name: "Node.js", color: "#68A063", level: 85 },
    { name: "MongoDB", color: "#4DB33D", level: 80 },
    { name: "Express", color: "#000000", level: 85 },
    { name: "Python", color: "#3776AB", level: 88 },
    { name: "Machine Learning", color: "#FF6B35", level: 75 },
    { name: "NLP", color: "#FF8C42", level: 70 },
    { name: "JavaScript", color: "#F7DF1E", level: 92 },
    { name: "TypeScript", color: "#3178C6", level: 85 },
    { name: "TensorFlow", color: "#FF6F00", level: 72 },
    { name: "CSS3", color: "#1572B6", level: 88 },
    { name: "HTML5", color: "#E34F26", level: 95 },
    { name: "Git", color: "#F05032", level: 90 },
    { name: "Docker", color: "#2496ED", level: 78 },
    { name: "AWS", color: "#FF9900", level: 75 },
  ];

  // Animate bar length from 0 to target
  const animatedLengths = useRef(skills.map(() => 0));
  const maxBarLength = 7; // How far bars extend from center

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003; // slow auto-rotation
    }
    // Animate bar lengths
    skills.forEach((skill, i) => {
      const target = (skill.level / 100) * maxBarLength;
      animatedLengths.current[i] += (target - animatedLengths.current[i]) * 0.08;
      if (Math.abs(animatedLengths.current[i] - target) < 0.01) {
        animatedLengths.current[i] = target;
      }
    });
  });

  // Distribute bars evenly on a sphere using spherical coordinates
  function getSphericalCoords(index, total, radius = 0) {
    // Golden Section Spiral for even distribution
    const inc = Math.PI * (3 - Math.sqrt(5));
    const off = 2 / total;
    const y = index * off - 1 + off / 2;
    const r = Math.sqrt(1 - y * y);
    const phi = index * inc;
    const x = Math.cos(phi) * r;
    const z = Math.sin(phi) * r;
    return new THREE.Vector3(x * radius, y * radius, z * radius);
  }

  return (
    <group ref={groupRef}>
      {/* Bars */}
      {skills.map((skill, i) => {
        // Direction vector from center
        const dir = getSphericalCoords(i, skills.length, 1).normalize();
        const barLength = animatedLengths.current[i];
        // Bar starts at center, extends outward along dir
        // Position bar so its base is at center, and it extends out
        // Center of bar is at (dir * barLength/2)
        const barCenter = dir.clone().multiplyScalar(barLength / 2);
        // Compute quaternion to align bar with dir
        const quat = new THREE.Quaternion();
        quat.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
        return (
          <group key={skill.name} position={barCenter.toArray()} quaternion={quat}>
            {/* Bar */}
            <mesh>
              <cylinderGeometry args={[0.13, 0.18, barLength, 16]} />
              <meshStandardMaterial color={skill.color} emissive={skill.color} emissiveIntensity={0.2} />
            </mesh>
            {/* Skill label at end of bar */}
            <Text
              position={[0, barLength / 2 + 0.4, 0]}
              fontSize={0.5}
              color={skill.color}
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.02}
              outlineColor="#000000"
            >
              {skill.name}
            </Text>
            {/* Percentage at end of bar */}
            <Text
              position={[0, barLength / 2 + 1, 0]}
              fontSize={0.3}
              color={skill.color}
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.01}
              outlineColor="#000000"
            >
              {skill.level}%
            </Text>
          </group>
        );
      })}
      {/* Center sphere for visual reference */}
      <mesh>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshStandardMaterial color="#222" opacity={0.7} transparent />
      </mesh>
    </group>
  );
};

export default SkillsSphere;
