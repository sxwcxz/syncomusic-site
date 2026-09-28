"use client";
import { useEffect, useState } from "react";
import { onTexturesReady, startIntro } from "@/lib/sceneReady";

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const off = onTexturesReady(() => {
      t = setTimeout(() => {
        setHidden(true);
        startIntro();
        setTimeout(() => setGone(true), 700);
      }, 400);
    });
    return () => { off(); clearTimeout(t); };
  }, []);

  if (gone) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-canvas transition-opacity duration-700"
      style={{ opacity: hidden ? 0 : 1, pointerEvents: hidden ? "none" : "auto" }}
    >
      <span className="text-accent font-bold text-3xl tracking-tight">SyncoMusic</span>
      <span className="mt-6 block h-[2px] w-32 overflow-hidden bg-ink/10">
        <span className="block h-full w-1/2 bg-accent animate-pulse" />
      </span>
    </div>
  );
}
