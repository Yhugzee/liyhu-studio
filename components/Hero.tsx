import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.tagline}>LiYhu Studio</p>

      <h1 className={styles.title}>
        Sites modernes, rapides et animés
      </h1>

      <p className={styles.subtitle}>
        Next.js et animations fluides pour des expériences propres et efficaces.
        Idéal vitrine, portfolio, landing page.
      </p>

      <div className={styles.actions}>
        <a href="#services" className="btn btn-ghost">
          Voir les services
        </a>
        <a href="#contact" className="btn btn-primary">
          Demander un devis
        </a>
      </div>
    </section>
  );
}
