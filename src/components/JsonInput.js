"use client";

import { useState } from "react";
import styles from "./JsonInput.module.css";

const JsonInput = ({ onJsonChange }) => {
  const [jsonInput, setJsonInput] = useState("");
  const [error, setError] = useState(null);

  const validateJsonStructure = (json) => {
    if (!Array.isArray(json)) {
      throw new Error("El JSON debe ser un array de objetos");
    }
    json.forEach((item, index) => {
      if (typeof item !== "object" || item === null) {
        throw new Error(`El elemento ${index + 1} debe ser un objeto`);
      }
      if (!item.hasOwnProperty("title")) {
        throw new Error(
          `El elemento ${index + 1} debe tener una propiedad 'title'`
        );
      }
      if (!item.hasOwnProperty("description")) {
        throw new Error(
          `El elemento ${index + 1} debe tener una propiedad 'description'`
        );
      }
      if (!item.hasOwnProperty("characteristics")) {
        throw new Error(
          `El elemento ${index + 1} debe tener una propiedad 'characteristics'`
        );
      }
    });
  };

  const handleInputChange = (e) => {
    setJsonInput(e.target.value);
    try {
      const parsedJson = JSON.parse(e.target.value);
      validateJsonStructure(parsedJson);
      onJsonChange(parsedJson);
      setError(null);
    } catch (error) {
      onJsonChange(null);
      setError(error.message);
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
