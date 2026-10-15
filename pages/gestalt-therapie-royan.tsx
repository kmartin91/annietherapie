import Image from "next/image";
import Link from "next/link";

import Breadcrumbs from "components/ui/Breadcrumbs";
import Faq, { FaqItem } from "components/ui/Faq";
import Seo from "components/ui/Seo";
import { breadcrumbJsonLd, faqJsonLd, graph, webPageJsonLd } from "@/lib/seo";
import { APPOINTMENT_HREF, PHONE, SESSION, telHref } from "@/lib/site";

import styles from "styles/pages/gestalt.module.css";

const PATH = "/gestalt-therapie-royan";
const TITLE = "Gestalt thérapie à Royan | Annie Maquet, psychopraticienne";
const DESCRIPTION =
  "Qu’est-ce que la Gestalt thérapie ? Origines, travail sur le contact et sur le corps, déroulement d’une séance au cabinet d’Annie Maquet, à Royan.";

const crumbs = [
  { name: "Accueil", path: "/" },
  { name: "La Gestalt thérapie", path: PATH },
];

const BENEFITS = [
  "Mieux comprendre ce qui se joue dans vos relations",
  "Accueillir des émotions longtemps mises de côté",
  "Remettre du mouvement là où des blocages se sont installés",
  "Trouver un équilibre de vie plus proche de vos désirs",
];

const FAQ: FaqItem[] = [
  {
    q: "Faut-il parler de son enfance en Gestalt thérapie ?",
    a: "Pas forcément. La Gestalt part de ce qui se passe aujourd’hui ; le passé trouve sa place quand il se manifeste dans le présent, à travers une émotion, un geste ou une situation qui se répète.",
  },
  {
    q: "Faut-il aimer bouger ou danser ?",
    a: "Non. Le travail corporel est proposé, jamais imposé, et il peut être très simple : une respiration, une posture, un geste.",
  },
  {
    q: "La Gestalt thérapie est-elle faite pour moi ?",
    a: "Elle s’adresse aux adultes qui traversent une difficulté ou souhaitent mieux se connaître. La première séance permet d’en parler ensemble.",
  },
];

const jsonLd = graph(webPageJsonLd(PATH, TITLE, DESCRIPTION), breadcrumbJsonLd(crumbs), faqJsonLd(FAQ));

export default function Gestalt() {
  return (
    <>
      <Seo title={TITLE} description={DESCRIPTION} path={PATH} jsonLd={jsonLd} />

      <section className={styles.hero} aria-labelledby="page-title">
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <Breadcrumbs items={crumbs} />
            <h1 id="page-title" className="title-xl rise">
              La Gestalt thérapie à Royan
            </h1>
            <p className="lead rise" style={{ animationDelay: "100ms", maxWidth: "32em" }}>
              Une thérapie qui s’intéresse à ce que vous vivez ici et maintenant, dans vos mots comme dans votre corps.
              Voici comment elle fonctionne, et comment je la pratique au cabinet de Royan.
            </p>
          </div>
          <div className={styles.heroVisual}>
            <span className={`shape shape--ochre ${styles.heroShape}`} aria-hidden="true" />
            <Image
              src="/images/hands.jpeg"
              alt="Deux mains se rejoignent devant un soleil couchant sur la mer"
              width={494}
              height={663}
              sizes="(max-width: 900px) 70vw, 340px"
              priority
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.layout}`}>
          <article className={styles.article}>
            <div className={styles.block}>
              <h2 className="title-m">D’où vient la Gestalt ?</h2>
              <p className="body-l">
                La Gestalt thérapie est née dans les années 1950, autour du psychiatre et psychothérapeute Fritz Perls.
                Elle emprunte à la psychanalyse, à la psychologie de la forme, à la phénoménologie et aux approches
                corporelles. Le mot allemand <span lang="de">Gestalt</span> se traduit par « forme », au sens de
                « prendre forme » : au fil des séances, on se construit, on s’organise autrement.
              </p>
            </div>

            <div className={styles.block}>
              <h2 className="title-m">Une thérapie du contact, ici et maintenant</h2>
              <p className="body-l">
                La Gestalt porte un regard attentif sur la manière dont vous entrez en contact avec votre environnement :
                avec les autres, avec ce que vous ressentez, avec vos besoins. Plutôt que de chercher seulement des
                explications, nous regardons comment les choses se passent pour vous aujourd’hui, dans la relation et
                dans la séance elle-même.
              </p>
              <p className="body-l">
                Le passé n’est pas mis de côté : il est accueilli tel qu’il se manifeste dans le présent, à travers une
                émotion, un geste, une façon de répéter certaines situations.
              </p>
            </div>

            <figure className={styles.figure}>
              <Image
                src="/images/girl-beach.jpeg"
                alt="Une femme danse pieds nus dans l’écume, sur une plage de Charente-Maritime"
                width={605}
                height={806}
                sizes="(max-width: 900px) 92vw, 720px"
                className={styles.figureImage}
              />
              <figcaption>Le mouvement fait partie du travail : le corps garde la mémoire de ce que l’on vit.</figcaption>
            </figure>

            <div className={styles.block}>
              <h2 className="title-m">Le corps comme allié</h2>
              <p className="body-l">
                La Gestalt est une thérapie psychocorporelle. En séance, j’utilise souvent des médias créatifs, et le
                corps est mis en mouvement : les expériences s’ancrent alors plus profondément qu’en passant uniquement
                par la parole. Danseuse et sportive, c’est une dimension à laquelle je tiens particulièrement.
              </p>
              <p className="body-l">Ces propositions restent toujours des invitations. Vous gardez la liberté d’en faire ce qui vous convient.</p>
            </div>

            <div className={styles.block}>
              <h2 className="title-m">Ce que la thérapie peut vous apporter</h2>
              <p className="body-l">
                Chaque parcours est différent. La Gestalt aide souvent à mieux percevoir ce que l’on ressent et ce dont
                on a besoin, à repérer les schémas qui se répètent, et à retrouver davantage de liberté dans ses choix et
                ses relations.
              </p>
              <ul className={styles.benefits}>
                {BENEFITS.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className={styles.block}>
              <h2 className="title-m">Une séance de Gestalt au cabinet de Royan</h2>
              <p className="body-l">
                J’accompagne les adultes en séance individuelle d’une heure, au centre-ville de Royan. Le cabinet est au
                premier étage avec ascenseur, accessible aux personnes à mobilité réduite. Il est facile d’accès depuis
                Vaux-sur-Mer, Saint-Georges-de-Didonne, Saint-Palais-sur-Mer ou Saujon.{" "}
                <Link href="/#consulter">Pour quelles raisons consulter ?</Link>
              </p>
            </div>
          </article>

          <aside className={styles.aside} aria-label="Prendre rendez-vous">
            <p className={styles.asideTitle}>Une première séance ?</p>
            <dl className={styles.asideFacts}>
              <dt>Durée</dt>
              <dd>1 heure</dd>
              <dt>Tarif</dt>
              <dd>{SESSION.price} €</dd>
              <dt>Lieu</dt>
              <dd>Royan centre</dd>
            </dl>
            <Link href={APPOINTMENT_HREF} className="btn btn--primary">
              Prendre rendez-vous
            </Link>
            <a href={telHref} className="btn btn--outline">
              {PHONE.display}
            </a>
          </aside>
        </div>
      </section>

      <section className="section section--sand" aria-labelledby="faq-title">
        <div className={`container ${styles.faq}`}>
          <h2 id="faq-title" className="title-l">
            Questions sur la Gestalt thérapie
          </h2>
          <Faq items={FAQ} />
        </div>
      </section>

      <section className="section" aria-labelledby="cta-title">
        <div className="container">
          <div className={styles.cta}>
            <div className={styles.ctaCopy}>
              <h2 id="cta-title" className="title-m">
                Envie d’essayer la Gestalt thérapie ?
              </h2>
              <p>Appelez-moi ou écrivez-moi pour convenir d’une première séance au cabinet de Royan.</p>
            </div>
            <div className={styles.ctaActions}>
              <Link href={APPOINTMENT_HREF} className="btn btn--light">
                Écrire un message
              </Link>
              <a href={telHref} className="btn btn--ghost-light">
                {PHONE.display}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
