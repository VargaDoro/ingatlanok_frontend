import React, { useContext } from "react";
import Ingatlan from "./Ingatlan";
import { IngatlanokContext } from "../../contexts/IngatlanokContext";

export default function Inagtlanok() {
  const { ingatlanokLista,loading, pont } = useContext(IngatlanokContext);
   if (loading) {
    // Betöltés alatt ezt jeleníti meg
    return <div>Betöltés folyamatban...</div>;
  }
  if (!ingatlanokLista || ingatlanokLista.length === 0) {
    // Ha nincs adat
    return <div>Nincsenek ingatlanok.</div>;
  }
return (
    <div className="">
      <h2>Ingatlanok</h2> 
      <div className="card">
      {ingatlanokLista.map((ingatlan) => (
        <Ingatlan key={ingatlan.id} ingatlan={ingatlan} />
      ))}
      </div>
    </div>
  );
}