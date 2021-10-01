import React from "react";
import { useState } from "react";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase.js";

function Formulario() {
  const [input, setInput] = useState("");

  const actualizarInput = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  const agregarInicialRappi = (e) => {
    e.preventDefault();
    setInput("RAPPI = ");
  };
  const agregarInicialPY = (e) => {
    e.preventDefault();
    setInput("PEDIDOS YA = ");
  };
  const borrar = (e) => {
    e.preventDefault();
    setInput("");
  };

  const agregarOrden = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "ordenes"), {
      info: input,
      timestamps: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
    setInput("");
  };
  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input className="input" value={input} onChange={actualizarInput} />
        </div>
        <div className="botones">
          <div className="botones-apps">
            <button className="btn-rappi" onClick={agregarInicialRappi}>
              Rappi
            </button>
            <button className="btn-PY" onClick={agregarInicialPY}>
              Pedidos Ya
            </button>
          </div>
          <div className="boton-agregar">
            <div>
              <button className="btn-agregar" onClick={agregarOrden}>
                AGREGAR
              </button>
            </div>
            <div>
              <button onClick={borrar} className="btn-borrar">
                Borrar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Formulario;