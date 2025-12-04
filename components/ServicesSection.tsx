import styles from "./ServicesSection.module.scss";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.bgWrap}>
        <Image
          alt="Services Banner"
          src="/Services_Banner.webp"
          quality={75}
          fill
          sizes="100vw"
          style={{
            objectPosition: 'right',
          }}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container-center ${styles.content}`}>
        <header className={styles.header}>
          <h2 className={styles.title}>Services</h2>
        </header>

        <ul className={styles.grid}>
          <li className={styles.card}>
            <h3 className={styles.cardTitle}>Site vitrine</h3>
            <p className={styles.cardText}>
              Présente ton activité avec un site clair, responsive et agréable
              à parcourir.
            </p>
          </li>

          <li className={styles.card}>
            <h3 className={styles.cardTitle}>Landing page</h3>
            <p className={styles.cardText}>
              Une page focalisée sur la conversion pour mettre en avant une
              offre, un produit ou un évènement.
            </p>
          </li>

          <li className={styles.card}>
            <h3 className={styles.cardTitle}>Refonte et performance</h3>
            <p className={styles.cardText}>
              Audit, nettoyage et optimisation pour améliorer le temps de
              chargement et l’expérience globale.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
