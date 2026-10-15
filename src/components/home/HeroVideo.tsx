import { ReactElement, useEffect, useRef } from "react";

// Les vagues de la côte royannaise, comme sur le site d'origine : ralenties,
// sans son, image fixe tant que la vidéo charge, et à l'arrêt si le visiteur
// a demandé moins d'animations. Version recadrée en hauteur (plus légère)
// sur téléphone.
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
      poster="/media/vagues-royan-large.jpg"
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    >
      <source src="/media/vagues-royan.mp4" type="video/mp4" media="(max-width: 700px)" />
      <source src="/media/vagues-royan-large.mp4" type="video/mp4" />
    </video>
  );
};

export default HeroVideo;
