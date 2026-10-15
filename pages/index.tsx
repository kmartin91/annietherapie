import Image from "next/image";
import Link from "next/link";

import HeroVideo from "components/home/HeroVideo";
import Faq, { FaqItem } from "components/ui/Faq";
import Hours from "components/ui/Hours";
import Icon from "components/ui/Icon";
import Seo from "components/ui/Seo";
import { faqJsonLd, graph, webPageJsonLd } from "@/lib/seo";
import { ADDRESS, APPOINTMENT_HREF, PHONE, PRACTITIONER, SESSION, telHref } from "@/lib/site";

import styles from "styles/pages/home.module.css";

const TITLE = "Psychopraticienne à Royan, Gestalt thérapie | Annie Maquet";
const DESCRIPTION =
  "Annie Maquet, psychopraticienne en Gestalt thérapie à Royan, accompagne les adultes en séance individuelle, au centre-ville. Séance d’une heure, 60 €.";

const REASONS = [
  { title: "Ce qui pèse", text: "Deuil, dépression, anxiété, crises d’angoisse, burn-out, stress.", shape: styles.markRose },
  {
    title: "Le corps et les comportements",
    text: "Addictions, troubles du comportement alimentaire (boulimie, anorexie, hyperphagie), troubles sexuels, phobies, insomnie.",
    shape: styles.markSage,
  },
  {
    title: "Soi et les autres",
    text: "Manque de confiance ou d’estime de soi, difficultés relationnelles, solitude, jalousie, rupture amoureuse, difficulté à s’engager, gestion des émotions.",
    shape: styles.markOchre,
  },
  { title: "Les passages de vie", text: "Traumatismes, abus, changement de vie, quête de sens.", shape: styles.markTeal },
];

const PATH_STEPS = [
  { title: "Infirmière", text: "Premier métier, en Île-de-France" },
  { title: "Danse et pratiques psychocorporelles", text: "Le corps comme porte d’entrée" },
  { title: "Gestalt praticienne certifiée", text: "Formation à l’IFFP" },
  { title: "Supervision et formation continue", text: "Pour garder un regard ouvert et critique sur ma pratique" },
];

const FAQ: FaqItem[] = [
  {
    q: "Quelle différence entre psychopraticienne, psychologue et psychiatre ?",
    a: "Le psychiatre est médecin et peut prescrire ; le psychologue est titulaire d’un master de psychologie. La psychopraticienne est formée à une méthode de thérapie, ici la Gestalt, et travaille sous supervision. Les approches peuvent se compléter.",
  },
  {
    q: "Combien coûte une séance, et est-elle remboursée ?",
    a: "La séance d’une heure coûte 60 €. Elle n’est pas prise en charge par l’Assurance maladie ; certaines mutuelles prévoient un forfait, renseignez-vous auprès de la vôtre.",
  },
  {
    q: "Combien de séances faut-il prévoir ?",
    a: "Cela dépend de chacun et de ce qui vous amène. Nous en parlons dès la première séance, et vous restez libre d’arrêter à tout moment.",
  },
  {
    q: "Le cabinet est-il accessible ?",
    a: "Oui. Il se trouve au premier étage avec ascenseur, conforme aux normes PMR, au centre-ville de Royan et à quelques minutes des arrêts de bus Cara’Bus.",
  },
  {
    q: "Comment prendre rendez-vous ?",
    a: `Par téléphone au ${PHONE.display}, ou en m’écrivant via le formulaire de contact. Je vous rappelle pour convenir d’un premier rendez-vous.`,
  },
];

const jsonLd = graph(webPageJsonLd("/", TITLE, DESCRIPTION), faqJsonLd(FAQ));

export default function Home() {
  return (
    <>
      <Seo title={TITLE} description={DESCRIPTION} path="/" jsonLd={jsonLd} />

      {/* Hero : la vidéo plein écran du site d’origine */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <HeroVideo className={styles.video} />
        <div className={styles.veil} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <h1 id="hero-title" className={styles.heroTitle}>
            <span className={`${styles.heroLine} rise`}>Cabinet de psychothérapie</span>{" "}
            <span className={`${styles.heroSub} rise`} style={{ animationDelay: "120ms" }}>
              Gestalt thérapie
            </span>{" "}
            <span className={`${styles.heroLine} rise`} style={{ animationDelay: "240ms" }}>
              Royan
            </span>
          </h1>
          <div className={`${styles.heroCtas} rise`} style={{ animationDelay: "360ms" }}>
            <Link href={APPOINTMENT_HREF} className="btn btn--light">
              Prendre rendez-vous
            </Link>
            <a href="#annie-maquet" className="btn btn--ghost-light">
              En savoir plus
            </a>
          </div>
        </div>
        <figure className={styles.quote}>
          <blockquote>
            « L’homme ne peut découvrir de nouveaux océans tant qu’il n’a pas le courage de perdre de vue la côte. »
          </blockquote>
          <figcaption>André Gide</figcaption>
        </figure>
      </section>

      {/* Présentation : le texte et les infos clés */}
      <section id="annie-maquet" className={styles.intro} aria-labelledby="intro-title">
        <div className={`container ${styles.introInner}`}>
          <div className={styles.introCopy}>
            <p className={styles.place}>
              <Icon name="pin" size={16} />
              Cabinet au centre-ville de Royan
            </p>
            <h2 id="intro-title" className="title-l">
              Annie Maquet, psychopraticienne en Gestalt thérapie à Royan
            </h2>
            <p className="lead">
              J’accompagne les adultes en séance individuelle, dans un cadre confidentiel et sans jugement, pour
              traverser ce qui fait souffrir et remettre du mouvement là où les choses se sont figées.
            </p>
            <div className={styles.ctas}>
              <Link href={APPOINTMENT_HREF} className="btn btn--primary">
                Prendre rendez-vous
                <Icon name="arrow" size={18} className="arrow" />
              </Link>
              <a href={telHref} className="btn btn--outline">
                <Icon name="phone" size={18} className={styles.tealIcon} />
                {PHONE.display}
              </a>
            </div>
          </div>
          <ul className={styles.facts}>
            <li>
              <Icon name="clock" className={styles.tealIcon} />
              <span>
                <strong>Séance d’une heure</strong>
                {SESSION.price} €, pour adultes
              </span>
            </li>
            <li>
              <Icon name="calendar" className={styles.tealIcon} />
              <span>
                <strong>Du lundi au jeudi</strong>
                sur rendez-vous
              </span>
            </li>
            <li>
              <Icon name="badge" className={styles.tealIcon} />
              <span>
                <strong>{PRACTITIONER.certification}</strong>
                formée à l’{PRACTITIONER.school.shortName}
              </span>
            </li>
            <li>
              <Icon name="pin" className={styles.tealIcon} />
              <span>
                <strong>{ADDRESS.street}</strong>
                ascenseur, accès PMR
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Séances */}
      <section id="seances" className="section section--sand" aria-labelledby="seances-title">
        <div className={`container ${styles.split}`}>
          <div className={styles.collage}>
            <Image
              src="/images/cabinet1.jpg"
              alt="Le cabinet de Gestalt thérapie à Royan : canapé, fauteuil et tapis aux couleurs douces"
              width={614}
              height={472}
              sizes="(max-width: 900px) 88vw, 480px"
              className={styles.collageMain}
            />
            <Image
              src="/images/cabinet2.jpg"
              alt="Le fauteuil et la table basse du cabinet, près de la fenêtre"
              width={614}
              height={480}
              sizes="(max-width: 900px) 48vw, 260px"
              className={styles.collageSmall}
            />
            <span className={`shape shape--ochre ${styles.collageOchre}`} aria-hidden="true" />
          </div>
          <div className={styles.copy}>
            <h2 id="seances-title" className="title-l">
              Comment se passe une séance
            </h2>
            <p className="body-l">
              Suivre une thérapie, c’est s’engager pour soi-même. Chaque séance est un rendez-vous avec vous, dans un
              espace de liberté d’expression où je vous accueille sans jugement, en toute confidentialité. Ensemble,
              nous construisons une alliance thérapeutique qui soutient votre évolution.
            </p>
            <ul className={styles.points}>
              <li>
                <strong>La parole, et le corps.</strong> J’utilise souvent des médias créatifs et je mets le corps en
                mouvement : les expériences s’ancrent plus profondément qu’en passant par le mental seul.
              </li>
              <li>
                <strong>À votre rythme.</strong> Au fil des séances, nous cheminons à travers les mots déposés et les
                expérimentations, en écoutant aussi ce que votre corps exprime.
              </li>
              <li>
                <strong>Vers plus d’équilibre.</strong> Nous élargissons l’horizon pour vous aider à trouver une vie
                plus en accord avec vos désirs.
              </li>
            </ul>
            <p className="muted">Séance individuelle d’une heure, pour adultes, au cabinet de Royan.</p>
          </div>
        </div>
      </section>

      {/* Gestalt */}
      <section id="gestalt" className="section" aria-labelledby="gestalt-title">
        <div className={`container ${styles.split} ${styles.splitReverse}`}>
          <div className={styles.copy}>
            <h2 id="gestalt-title" className="title-l">
              La Gestalt thérapie, une thérapie du corps et de la relation
            </h2>
            <p className="body-l">
              Théorisée dans les années 1950 par le psychiatre et psychothérapeute Fritz Perls, la Gestalt thérapie est
              une approche psychocorporelle, relationnelle et existentielle. Le mot allemand <span lang="de">Gestalt</span>{" "}
              veut dire « forme » : au fil des séances, vous prenez forme, vous vous construisez, vous vous réorganisez.
            </p>
            <p className="body-l">
              Elle porte une attention particulière à la façon dont vous entrez en contact avec votre environnement, ici
              et maintenant, et à ce que votre corps en dit.
            </p>
            <Link href="/gestalt-therapie-royan" className="text-link">
              Découvrir la Gestalt thérapie
              <Icon name="arrow" size={18} />
            </Link>
          </div>
          <div className={styles.arch}>
            <span className={`shape shape--sage ${styles.archShape}`} aria-hidden="true" />
            <Image
              src="/images/girl-beach.jpeg"
              alt="Une femme danse pieds nus dans l’écume, sur une plage"
              width={605}
              height={806}
              sizes="(max-width: 900px) 70vw, 400px"
              className={styles.archImage}
            />
          </div>
        </div>
      </section>

      {/* Pourquoi consulter */}
      <section id="consulter" className="section section--sand" aria-labelledby="consulter-title">
        <div className={`container ${styles.stack}`}>
          <div className={styles.head}>
            <h2 id="consulter-title" className="title-l">
              Pour quelles raisons consulter ?
            </h2>
            <p className="body-l">
              On vient consulter pour des souffrances psychiques ou psychosomatiques, parfois sans savoir les nommer.
              Voici les difficultés que l’on m’apporte le plus souvent, sans que la liste soit complète.
            </p>
          </div>
          <ul className={styles.reasons}>
            {REASONS.map((reason) => (
              <li key={reason.title} className={styles.reason}>
                <span className={`${styles.mark} ${reason.shape}`} aria-hidden="true" />
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </li>
            ))}
          </ul>
          <p className={styles.notice}>
            La thérapie ne remplace pas un suivi médical. En cas d’urgence, appelez le 15 ; en cas de pensées
            suicidaires, le 3114 répond jour et nuit.
          </p>
        </div>
      </section>

      {/* Qui suis-je */}
      <section id="annie" className="section" aria-labelledby="annie-title">
        <div className={`container ${styles.split}`}>
          <div className={styles.portrait}>
            <span className={`shape shape--rose ${styles.portraitShape}`} aria-hidden="true" />
            <Image
              src="/images/annie.jpeg"
              alt="Annie Maquet, psychopraticienne à Royan, au bord de l’océan"
              width={614}
              height={614}
              sizes="(max-width: 900px) 88vw, 480px"
              className={styles.portraitImage}
            />
          </div>
          <div className={styles.copy}>
            <h2 id="annie-title" className="title-l">
              Qui suis-je ?
            </h2>
            <p className="body-l">
              Fascinée par la complexité de l’être humain, autant par la mécanique du corps que par celle du psychisme,
              j’ai d’abord été infirmière en Île-de-France. Mes expériences professionnelles et personnelles, et les
              thérapies que j’ai moi-même suivies, m’ont conduite vers le métier de psychopraticienne.
            </p>
            <p className="body-l">
              Sportive et passionnée de danse, je me suis tournée vers les thérapies qui prennent en compte le corps
              autant que l’esprit. Après plusieurs pratiques psychocorporelles, j’ai choisi d’approfondir la Gestalt
              thérapie, à <a href={PRACTITIONER.school.url}>l’{PRACTITIONER.school.name}</a>.
            </p>
            <ol className={styles.path}>
              {PATH_STEPS.map((step, index) => (
                <li key={step.title} className={index === PATH_STEPS.length - 1 ? styles.pathCurrent : undefined}>
                  <strong>{step.title}</strong>
                  <span>{step.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Le cabinet */}
      <section className="section section--sand" aria-labelledby="cabinet-title">
        <div className={`container ${styles.stack}`}>
          <div className={styles.headRow}>
            <h2 id="cabinet-title" className="title-l">
              Le cabinet, au cœur de Royan
            </h2>
            <Link href="/informations" className="text-link">
              Toutes les infos pratiques
              <Icon name="arrow" size={18} />
            </Link>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3 className="label">Tarif</h3>
              <p className={styles.price}>{SESSION.price} €</p>
              <p>la séance individuelle d’une heure</p>
            </div>
            <div className={styles.card}>
              <h3 className="label">Horaires</h3>
              <Hours compact />
            </div>
            <div className={styles.card}>
              <h3 className="label">Adresse</h3>
              <address>
                <strong>
                  {ADDRESS.street}
                  <br />
                  {ADDRESS.postalCode} {ADDRESS.city}
                </strong>
                <br />
                1er étage avec ascenseur, accessible PMR
                <br />
                Bus Cara’Bus : lignes 1, 2, 3 et 5
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" aria-labelledby="faq-title">
        <div className={`container ${styles.faq}`}>
          <div className={styles.faqHead}>
            <h2 id="faq-title" className="title-l">
              Vos questions
            </h2>
            <p className="muted">Ce que l’on me demande souvent avant une première séance.</p>
          </div>
          <Faq items={FAQ} openFirst />
        </div>
      </section>

      {/* Appel final */}
      <section className={styles.final} aria-labelledby="final-title">
        <div className={`container`}>
          <div className={styles.finalBox}>
            <div className={styles.finalCopy}>
              <h2 id="final-title" className="title-l">
                Prendre rendez-vous au cabinet de Royan
              </h2>
              <p>
                Par téléphone ou par message, pour une séance individuelle d’une heure, du lundi au jeudi, au
                centre-ville de Royan.
              </p>
              <div className={styles.ctas}>
                <Link href={APPOINTMENT_HREF} className="btn btn--light">
                  Écrire un message
                </Link>
                <a href={telHref} className="btn btn--ghost-light">
                  Appeler le {PHONE.display}
                </a>
              </div>
            </div>
            <Image
              src="/images/conclusion.jpeg"
              alt="Silhouettes dansant sur la plage au coucher du soleil"
              width={991}
              height={598}
              sizes="(max-width: 900px) 92vw, 480px"
              className={styles.finalImage}
            />
          </div>
        </div>
      </section>
    </>
  );
}
