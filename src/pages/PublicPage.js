import React, { useContext } from "react";
import Ingatlanok from "../components/public/Ingatlanok";
import { IngatlanokContext } from "../contexts/IngatlanokContexts";

export default function PublicPage() {
  const { ingatlanokLista } = useContext(IngatlanokContext);
  
  return (
    <div>
      <Ingatlanok />
    </div>
  );
}