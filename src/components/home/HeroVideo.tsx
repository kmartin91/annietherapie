import { ReactElement, useEffect, useRef } from "react";

// Les vagues de la côte royannaise, comme sur le site d'origine : ralenties,
// sans son, image fixe tant que la vidéo charge, et à l'arrêt si le visiteur
// a demandé moins d'animations.
const HeroVideo = ({ className }: { className?: string }): ReactElement => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) {
      return undefined;
    }

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (motion.matches) {
        video.pause();
        return;
      }
      video.playbackRate = 0.7;
      video.play().catch(() => undefined);
    };

    apply();
    motion.addEventListener("change", apply);
    return () => motion.removeEventListener("change", apply);
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src="/media/vagues-royan.mp4"
      poster="/media/vagues-royan.jpg"
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
};

export default HeroVideo;
