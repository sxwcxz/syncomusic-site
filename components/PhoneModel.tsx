"use client";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { SCROLL_STATES, MOBILE_SCALE_FACTOR, MOBILE_POSITION_FACTOR } from "./scrollStates";
import { lockScroll, unlockScroll, markTexturesReady, onIntroStart } from "@/lib/sceneReady";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SCREEN_NAME_HINTS = ["screen", "display", "ui"];

export default function PhoneModel() {
  const groupRef = useRef<THREE.Group>(null);
  const gltf = useGLTF("/models/phone.glb");
  // The app screenshot texture
  const uiTexture = useTexture("/textures/syncomusic-ui.jpg");
  
  const scene = gltf.scene;
  const { size } = useThree();

  const normalized = useMemo(() => {
    const cloned = scene.clone(true);
    const box = new THREE.Box3().setFromObject(cloned);
    const center = box.getCenter(new THREE.Vector3());
    const sizeVec = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(sizeVec.x, sizeVec.y, sizeVec.z) || 1;
    const fit = 1 / maxDim;

    cloned.position.sub(center).multiplyScalar(fit);
    cloned.scale.setScalar(fit);

    uiTexture.colorSpace = THREE.SRGBColorSpace;
    uiTexture.flipY = false; // Adjust depending on glTF UVs
    uiTexture.needsUpdate = true;

    cloned.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;
      
      const mat0 = child.material as THREE.Material;
      const matName = (mat0?.name || "").toLowerCase();
      const meshName = (child.name || "").toLowerCase();
      const isScreen = SCREEN_NAME_HINTS.some(h => matName.includes(h) || meshName.includes(h));

      if (isScreen) {
        // Apply SyncoMusic UI texture to the screen mesh
        const newMat = new THREE.MeshBasicMaterial({ map: uiTexture });
        child.material = newMat;
      } else {
        // Fix standard materials for solid phone body
        if (child.material) {
           const mat = (child.material as THREE.Material).clone();
           mat.transparent = false;
           mat.opacity = 1;
           mat.depthWrite = true;
           child.material = mat;
        }
      }
    });

    return cloned;
  }, [scene, uiTexture]);

  useEffect(() => {
    markTexturesReady();
  }, []);

  useLayoutEffect(() => {
    const g = groupRef.current;
    if (!g) return;
    
    lockScroll();
    let cancelIntroSub: (() => void) | null = null;
    
    const ctx = gsap.context((self) => {
      const isMobile = window.matchMedia("(max-width: 1023px)").matches;
      const ps = isMobile ? MOBILE_POSITION_FACTOR : 1;
      const ss = isMobile ? MOBILE_SCALE_FACTOR    : 1;
      const yOffset = isMobile ? 0.3 : 0;
      const hero = SCROLL_STATES[0];

      g.position.set(hero.position[0] * ps, hero.position[1] * ps + yOffset, hero.position[2] * ps);
      g.rotation.set(hero.rotation[0], hero.rotation[1] - Math.PI, hero.rotation[2]); // Start backward
      g.scale.setScalar(hero.scale * ss);
      
      gsap.set("[data-hero-text]", { opacity: 0, y: 22 });

      const intro = gsap.timeline({
        paused: true,
        onComplete: () => {
          unlockScroll();
          self.add(() => buildScrollTimeline());
        },
      });

      cancelIntroSub = onIntroStart(() => intro.play());

      intro.to(
        g.rotation,
        { y: hero.rotation[1], duration: 3.6, ease: "sine.inOut" },
        0
      );

      intro.to(
        "[data-hero-text]",
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.85, ease: "power2.out" },
        1.8
      );

      function buildScrollTimeline() {
        const tl = gsap.timeline({
          defaults: { duration: 1, ease: "none" },
          scrollTrigger: {
            trigger: "main",
            start: "top top",
            end:   "bottom bottom",
            scrub: 1.5,
            invalidateOnRefresh: true,
          },
        });

        for (let i = 1; i < SCROLL_STATES.length; i++) {
          const next = SCROLL_STATES[i];
          const at = i - 1;
          tl.to(g!.position, { x: next.position[0] * ps, y: next.position[1] * ps + yOffset, z: next.position[2] * ps }, at)
            .to(g!.rotation, { x: next.rotation[0], y: next.rotation[1], z: next.rotation[2] }, at)
            .to(g!.scale, { x: next.scale * ss, y: next.scale * ss, z: next.scale * ss }, at);
        }
        ScrollTrigger.refresh();
      }
    });

    return () => {
      cancelIntroSub?.();
      unlockScroll();
      ctx.revert();
    };
  }, []);

  return (
    <group ref={groupRef} dispose={null}>
      <primitive object={normalized} />
    </group>
  );
}

useGLTF.preload("/models/phone.glb");
useTexture.preload("/textures/syncomusic-ui.jpg");
