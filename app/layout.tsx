import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SyncoMusic — The Ultimate Audio Experience",
  description: "A scroll-driven cinematic product page for the SyncoMusic app.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; } window.scrollTo(0, 0);` }} />
        <link rel="preload" href="/models/phone.glb" as="fetch" crossOrigin="anonymous" type="model/gltf-binary" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
