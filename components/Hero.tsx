import styles from "./Hero.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgWrap}>
        <Image
          alt="LiYhu Studio Banner"
          src="/LiYhu_Banner_moshed.webp"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRlIAAABXRUJQVlA4TEYAAAAvAAAAAAfQ//3/3///7///2//3///7///2//3///7///2//3///7///2//3///7///2//3///7///2//3///7///2/wA==" // Vous pouvez générer un vrai base64 si besoin
          quality={75}
          fill
          sizes="100vw"
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <p className={styles.tagline}>LiYhu Studio</p>

        <h1 className={styles.title}>
          Sites modernes, rapides et animés
        </h1>

        <p className={styles.subtitle}>
          Next.js et animations fluides pour des expériences propres et efficaces.
          Idéal vitrine, portfolio, landing page.
        </p>

        <div className={styles.actions}>
          <a href="#services" className={styles.btn}>
            Services proposés
          </a>
          <a href="#contact" className={styles.btn}>
            Sites d&#39;exemples
          </a>
        </div>
      </div>
    </section>
  );
}