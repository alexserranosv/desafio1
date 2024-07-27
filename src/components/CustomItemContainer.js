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
          title={item.titulo || "Sin título"}
          description={item.descripcion || "Sin descripción"}
          fecha={item.caracteristicas.fecha || "Sin descripción"}
          impacto={item.caracteristicas.impacto || "Sin descripción"}
          imageUrl={item.imagen_de_referencia}
        />
      ))}
    </div>
  );
};

export default CustomItemContainer;
