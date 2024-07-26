"use client";

import styles from "./CustomItem.module.css";

const CustomItem = ({ title, description, characteristics, imageUrl }) => {
  return (
    <div className={styles.item}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>{title || "Sin título"}</h2>
          <h3>DESCRIPCIÓN</h3>
          <p>{description || "Sin descripción"}</p>
          <h3>CARACTERÍSTICAS</h3>
          <p>{characteristics || "Sin características"}</p>
        </div>
        <div className={styles.imageContainer}>
          {imageUrl ? (
            <img src={imageUrl} alt={title} className={styles.image} />
          ) : (
            <div className={styles.placeholderImage}>
              <div className={styles.placeholderCircle}></div>
              <div className={styles.placeholderTriangle}></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomItem;
