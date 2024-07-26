"use client";

import { useState } from "react";
import JsonInput from "../components/JsonInput";
import CustomItemContainer from "../components/CustomItemContainer";
import styles from "./page.module.css";

export default function Home() {
  const [items, setItems] = useState([]);

  const handleJsonChange = (newJson) => {
    console.log("New JSON:", newJson); // Para depuración
    setItems(newJson || []);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputSection}>
        <JsonInput onJsonChange={handleJsonChange} />
      </div>
      <div className={styles.displaySection}>
        <CustomItemContainer items={items} />
      </div>
    </div>
  );
}
