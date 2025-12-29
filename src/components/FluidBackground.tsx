import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Vector2 } from "three";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  varying vec2 vUv;

  // Simplex noise function
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 st = vUv;
    float time = uTime * 0.25; // Faster, more exciting
    
    // Mouse Interaction
    float dist = distance(st, uMouse);
    float glow = 1.0 / (dist * 20.0 + 0.5);
    
    // Liquid distortion
    float noise1 = snoise(st * 3.0 + time);
    float noise2 = snoise(st * 6.0 - time * 0.5 + glow * 0.4); // Stronger reactivity
    
    float pattern = snoise(st * 2.0 + vec2(noise1, noise2));
    
    // Vibrant Color Palette
    vec3 color1 = vec3(0.1, 0.0, 0.4);  // Deep Indigo
    vec3 color2 = vec3(0.6, 0.1, 0.9);  // Electric Purple
    vec3 color3 = vec3(0.0, 0.6, 1.0);  // Neon Cyan
    vec3 color4 = vec3(0.9, 0.0, 0.5);  // Hot Pink Accent

    // Complex Mix
    vec3 finalColor = mix(color1, color2, pattern + 0.3);
    finalColor = mix(finalColor, color3, noise2 * 0.5);
    finalColor += color4 * max(0.0, noise1 * 0.3); // Add pink sparkles
    
    // Add strong mouse glow
    finalColor += vec3(0.4, 0.6, 1.0) * glow * 0.6;
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const StarField = (props: any) => {
    const ref = useRef<any>();
    const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 1.5 }));

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
            // Pulse stars
            const s = 1 + Math.sin(state.clock.elapsedTime) * 0.2;
            ref.current.scale.set(s, s, s);
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
};

const FluidMesh = () => {
    const meshRef = useRef<any>(null);
    const mouseRef = useRef(new Vector2(0.5, 0.5));

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uMouse: { value: new Vector2(0.5, 0.5) },
        uResolution: { value: new Vector2(1, 1) }
    }), []);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
            // Smooth mouse interpolation
            meshRef.current.material.uniforms.uMouse.value.lerp(mouseRef.current, 0.1);
        }
    });

    // Track mouse on window to ensure coverage
    useMemo(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.set(
                e.clientX / window.innerWidth,
                1.0 - (e.clientY / window.innerHeight)
            );
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <mesh ref={meshRef} scale={[10, 10, 1]}>
            <planeGeometry args={[2, 2]} />
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
            />
        </mesh>
    );
};

const FluidBackground = () => {
    return (
        <div className="fixed inset-0 z-0 bg-black">
            <Canvas camera={{ position: [0, 0, 1] }} dpr={1}>
                <FluidMesh />
                <StarField />
            </Canvas>
        </div>
    );
};

export default FluidBackground;
