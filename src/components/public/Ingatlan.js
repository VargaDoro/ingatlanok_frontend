import React from "react";

export default function Ingatlan({ ingatlan }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {ingatlan.kepUrl && (
        <img
          src={process.env.PUBLIC_URL + '/kepek/' + ingatlan.kepUrl}
          className="card-img-top"
          alt={ingatlan.leiras}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{ingatlan.leiras}</h5>
        <p className="card-text">
          <strong>Ár:</strong> {ingatlan.ar.toLocaleString()} Ft
        </p>
        <p className="card-text">
          <strong>Dátum:</strong> {new Date(ingatlan.datum).toLocaleDateString()}
        </p>
        <p className="card-text">
          <strong>Tehermentes:</strong> {ingatlan.tehermentes ? "Igen" : "Nem"}
        </p>
      </div>
    </div>
  );
}
