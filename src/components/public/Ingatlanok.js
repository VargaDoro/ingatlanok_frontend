import React, { useContext } from "react";
import Ingatlan from "./Ingatlan";
import { IngatlanokContext } from "../../contexts/IngatlanokContexts";

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
        <div className="container mt-4">
            <div className="row g-3">
                {ingatlanokLista.map((ingatlan) => (
                <div key={ingatlan.id} className="col-md-4 col-lg-3">
                    <Ingatlan ingatlan={ingatlan} />
                </div>
                ))}
            </div>
        </div>

    );
}