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

    // La vidéo ne se télécharge qu'une fois la page chargée : elle ne retarde
    // pas l'affichage du texte (l'image fixe est là en attendant).
    let started = false;
    const start = () => {
      if (started) {
        return;
      }
      started = true;
      apply();
    };
    const onLoad = () => window.setTimeout(start, 200);
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    motion.addEventListener("change", apply);
    return () => {
      window.removeEventListener("load", onLoad);
      motion.removeEventListener("change", apply);
    };
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster="/media/vagues-royan-large.jpg"
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
    >
      <source src="/media/vagues-royan.mp4" type="video/mp4" media="(max-width: 700px)" />
      <source src="/media/vagues-royan-large.mp4" type="video/mp4" />
    </video>
  );
};

export default HeroVideo;
