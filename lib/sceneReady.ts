// Tiny CustomEvent bridge between LoadingScreen and PhoneModel.
const TEXTURES_READY = "scene:textures-ready";
const INTRO_START = "scene:intro-start";

let texturesReady = false;
let introStarted = false;

export function lockScroll() {
  if (typeof document === "undefined") return;
  document.documentElement.classList.add("scroll-locked");
  window.scrollTo(0, 0);
}

export function unlockScroll() {
  if (typeof document === "undefined") return;
  document.documentElement.classList.remove("scroll-locked");
}

export function markTexturesReady() {
  texturesReady = true;
  window.dispatchEvent(new CustomEvent(TEXTURES_READY));
}

export function onTexturesReady(cb: () => void): () => void {
  if (texturesReady) { cb(); return () => {}; }
  const h = () => cb();
  window.addEventListener(TEXTURES_READY, h, { once: true });
  return () => window.removeEventListener(TEXTURES_READY, h);
}

export function startIntro() {
  introStarted = true;
  window.dispatchEvent(new CustomEvent(INTRO_START));
}

export function onIntroStart(cb: () => void): () => void {
  if (introStarted) { cb(); return () => {}; }
  const h = () => cb();
  window.addEventListener(INTRO_START, h, { once: true });
  return () => window.removeEventListener(INTRO_START, h);
}
