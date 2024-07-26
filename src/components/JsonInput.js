"use client";

import { useState } from "react";
import styles from "./JsonInput.module.css";

const JsonInput = ({ onJsonChange }) => {
  const [jsonInput, setJsonInput] = useState("");
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setJsonInput(e.target.value);
    try {
      const parsedJson = JSON.parse(e.target.value);
      if (!Array.isArray(parsedJson)) {
        throw new Error("El JSON debe ser un array de objetos");
      }
      onJsonChange(parsedJson);
      setError(null);
    } catch (error) {
      onJsonChange([]);
      setError("JSON inválido: " + error.message);
    }
  };

  return (
    <div className={styles.container}>
      <textarea
        className={styles.textarea}
        value={jsonInput}
        onChange={handleInputChange}
        placeholder="Ingrese su JSON aquí (array de objetos)"
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default JsonInput;
