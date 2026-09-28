export type ScrollState = {
  id: string; position: [number, number, number]; rotation: [number, number, number]; scale: number;
};

export const SCROLL_STATES: ScrollState[] = [
  // 0 — Hero: right side, screen facing slightly left.
  { id: "hero",    position: [ 0.75, 0.08, 0.08], rotation: [0.08, -0.4, 0.03], scale: 2.08 },
  // 1 — Closeup: left and forward, screen clear.
  { id: "closeup", position: [-0.75, 0.05, 0.75], rotation: [0.05, 0.35, 0.02], scale: 2.2 },
  // 2 — Front-facing centered, screen perfectly straight at viewer.
  { id: "front",   position: [-0.3, -0.05, 0.2],  rotation: [0.0, 0.0, 0 ], scale: 1.9 },
  // 3 — Top/side: dynamic angle showing phone edge.
  { id: "top",     position: [ 0.0, 0.05, 0.4],   rotation: [Math.PI/2 - 0.1, 0.0, Math.PI/2], scale: 1.85 },
  // 4 — Back: showing back of the phone.
  { id: "back",    position: [ 0.6, -0.05, 0.0],  rotation: [-0.1, Math.PI, 0.18], scale: 1.7 },
  // 5 — Final: screen facing viewer, pulled left so UI is perfectly readable.
  { id: "final",   position: [-0.95, -0.05, 0.2], rotation: [0.04, 0.1, -0.02], scale: 1.95 },
];

export const MOBILE_SCALE_FACTOR = 1.1;
export const MOBILE_POSITION_FACTOR = 0.1;
