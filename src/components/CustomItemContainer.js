"use client";

import CustomItem from "./CustomItem";
import styles from "./CustomItemContainer.module.css";

const CustomItemContainer = ({ items }) => {
  if (!items || items.length === 0) {
    return (
      <div className={styles.noItems}>
        No hay elementos para mostrar. Por favor, ingrese un JSON válido.
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <CustomItem
          key={index}
          title={item.title || "Sin título"}
          description={item.description || "Sin descripción"}
          characteristics={item.characteristics || "Sin características"}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default CustomItemContainer;
