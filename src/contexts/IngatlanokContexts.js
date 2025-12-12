import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const IngatlanokContext = createContext();

export function IngatlanokProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [ingatlanokLista, setIngatlanokLista] = useState([]);

  function getIngatlanok() {
    axios
      .get("http://127.0.0.1:8000/api/ingatlanok")
      .then(function (response) {
        setIngatlanokLista(response.data); // adatokat elmentjük
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    getIngatlanok();
  }, []);

  return (
    <IngatlanokContext.Provider value={{ ingatlanokLista, loading }}>
      {children}
    </IngatlanokContext.Provider>
  );
}
