import Header from "@/components/Header";
import LoadingScreen from "@/components/LoadingScreen";
import SceneClient from "@/components/SceneClient";
import ScrollSections from "@/components/ScrollSections";

export default function Page() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <SceneClient />
      <main className="relative z-10">
        <ScrollSections />
      </main>
    </>
  );
}
