import Topography from "../ui/Topography";
import { useActiveChapter } from "./StoryProgress";

// Camera pose per chapter. Kept within a narrow range so the background shifts
// gently between chapters instead of competing with the content.
const SCENES = {
  home: { tilt: 32, elevation: 1 },
  about: { tilt: 36, elevation: 1 },
  oracle: { tilt: 42, elevation: 1.1 },
  gestureos: { tilt: 46, elevation: 0.95 },
  work: { tilt: 38, elevation: 1 },
  skills: { tilt: 34, elevation: 1 },
  projects: { tilt: 30, elevation: 1.05 },
  testimonials: { tilt: 33, elevation: 0.95 },
  certificates: { tilt: 35, elevation: 0.95 },
  contact: { tilt: 28, elevation: 0.85 },
};

const StoryBackground = () => {
  const active = useActiveChapter();
  const scene = SCENES[active] ?? SCENES.home;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Topography
        color="#4f7cff"
        lineCount={22}
        lineWidth={1.2}
        elevation={scene.elevation}
        foreground={0.2}
        tilt={scene.tilt}
        speed={0.08}
        direction="forward"
        glow={0.35}
        depthOfField={0.4}
        fog={0.45}
        hoverEffect="lift"
        clickEffect="none"
        majorLines
        scale={1}
        detail={0.35}
        morph={0.05}
        brightness={0.85}
        markers="none"
        glitch={0}
        opacity={1}
        mouseInteraction
        mouseRadius={1}
        mouseStrength={0.3}
        trail={0.3}
        parallax={0.15}
        intro
        lightMode={false}
      />
      {/* Translucent veil + vignette so the lines sit behind the content, not over it. */}
      <div className="absolute inset-0 bg-primary/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,8,22,0.75)_100%)]" />
    </div>
  );
};

export default StoryBackground;
