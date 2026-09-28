"use client";
import FeatureStat from "./FeatureStat";

export default function ScrollSections() {
  return (
    <>
      {/* 1. HERO */}
      <section id="hero" data-section="hero" className="section relative">
        <div className="max-w-[640px] md:max-w-[52%] text-center lg:text-left mx-auto lg:mx-0">
          <p className="eyebrow mb-6" data-hero-text>Music reinvented.</p>
          <h1 className="headline text-ink" data-hero-text>Sync.</h1>
          <p className="mt-8 max-w-md mx-auto lg:mx-0 text-base md:text-lg text-ink/70 leading-relaxed" data-hero-text>
            Discover SyncoMusic. The ultimate mobile music experience with seamless playback, stunning custom UI, and powerful offline capabilities.
          </p>
          <a href="#features" className="cta mt-10" data-hero-text>Explore features</a>
        </div>
        <div className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-ink/60 text-xs tracking-wider">
          <span>Start scrolling to explore</span>
          <span className="block w-px h-8 bg-ink/30" />
        </div>
      </section>

      {/* 2. CLOSE-UP */}
      <section id="features" data-section="closeup" className="section relative justify-end">
        <div className="max-w-[420px] text-right md:text-left md:max-w-[40%] md:ml-auto lg:mt-[6vh]">
          <p className="eyebrow mb-4">Design & Interface</p>
          <h2 className="headline-md text-ink">UI.<br />Refined.</h2>
          <p className="mt-6 text-ink/70 leading-relaxed">
            A stunningly fluid interface crafted for music lovers. Intuitive controls, dynamic color themes, and a player that feels alive with every beat.
          </p>
        </div>
      </section>

      {/* 3. FRONT FACING + STATS */}
      <section id="performance" data-section="front" className="section relative">
        <div className="lg:absolute lg:bottom-[18vh] lg:left-[10vw] max-w-[420px]">
          <p className="eyebrow mb-3">Performance</p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Built for the<br />perfect beat.
          </h2>
        </div>
        <div className="mt-6 lg:mt-0 lg:absolute lg:top-[22vh] lg:right-[10vw] flex flex-row lg:flex-col gap-5 lg:gap-7 items-start lg:items-end">
          <FeatureStat label="Audio Quality" value="Hi-Res" />
          <FeatureStat label="Equalizer" value="10-Band" />
          <FeatureStat label="Offline Mode" value="Active" />
        </div>
      </section>

      {/* 4. TOP / HORIZONTAL */}
      <section id="design" data-section="top" className="section relative">
        <div className="max-w-[480px] md:max-w-[40%]">
          <p className="eyebrow mb-4">Anywhere you go</p>
          <h2 className="headline-md text-ink">Always<br />in sync.</h2>
          <p className="mt-6 text-ink/70 leading-relaxed">
            Take your entire library offline. Whether you are on a flight or commuting, SyncoMusic ensures your favorite tracks are always just a tap away.
          </p>
        </div>
      </section>

      {/* 5. BACK / DIAGONAL */}
      <section id="display" data-section="back" className="section relative">
        <div className="max-w-[440px] md:max-w-[40%]">
          <p className="eyebrow mb-4">Smart Management</p>
          <h2 className="headline-md text-ink">Control<br />every playlist.</h2>
          <p className="mt-6 text-ink/70 leading-relaxed">
            Organize your tracks effortlessly. Advanced sorting, smart folders, and a robust database architecture ensure you never lose a song.
          </p>
        </div>
      </section>

      {/* 6. INTERACTIVE 3D GALLERY & CTA */}
      <section id="experience" data-section="final" className="section relative">
        <div className="w-full flex items-center justify-center lg:justify-end">
          <div className="text-center lg:text-right max-w-[85%] lg:max-w-[min(520px,46vw)] w-full">
            <p className="eyebrow mb-4">Experience SyncoMusic</p>
            <h2 className="final-title text-ink">
              Ready to<br />
              <span>Play</span><br />
              <span className="relative inline-block">
                <span className="relative z-10 text-white px-6 italic">louder?</span>
                <span className="absolute inset-0 bg-accent rounded-full -z-0 translate-y-[6%]" />
              </span>
            </h2>
            <div className="mt-8 flex justify-center lg:justify-end">
              <a 
                href="https://play.google.com/store/apps/details?id=com.eaysoft.syncomusic" 
                target="_blank" 
                rel="noopener noreferrer" 
                id="buy" 
                className="cta"
              >
                Download on Google Play
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
