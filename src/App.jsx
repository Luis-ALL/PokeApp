import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";
import Loader from "./components/Loader";
import logoPokeApp from './assets/img/logoPokeApp.png';


function App() {
  const [nombre, setNombre] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const buscarPokemon = async () => {
    if (!nombre) {
      setError("Ingresa un nombre válido");
      return;
    }

    try {
      setCargando(true);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
      if (!res.ok) throw new Error("Pokémon no encontrado");
      const data = await res.json();
      setPokemon(data);
      localStorage.setItem("ultimoPokemon", nombre);
      setError("");
    } catch (err) {
      setError(err.message);
      setPokemon(null);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    const ultimo = localStorage.getItem("ultimoPokemon");
    if (ultimo) {
      setNombre(ultimo);
      const fetchData = async () => {
        try {
          setCargando(true);
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${ultimo}`);
          if (!res.ok) throw new Error("Pokémon no encontrado");
          const data = await res.json();
          setPokemon(data);
        } catch (err) {
          setError(err.message);
          setPokemon(null);
        } finally {
          setCargando(false);
        }
      };
      fetchData();
    }
  }, []);

  const handleChange = (e) => {
    const valor = e.target.value.toLowerCase();
    if (/^[a-z.-]*$/.test(valor)) {
      setNombre(valor);
      setError("");
    } else {
      setError("Solo letras minúsculas, punto o guión.");
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <div className="logo-container">
        <img src={logoPokeApp} alt="PokeApp"/>
      </div>
      <div className="search-container">
        <SearchBar
          nombre={nombre}
          onChange={handleChange}
          buscarPokemon={buscarPokemon}/>
        <p className="text-danger ms-1 mt-2 mb-0 mb-md-5" style={{ minHeight: "1.5rem"}}>
          {error || " "}
        </p>
        {cargando && <Loader />}
      </div>
      <div className="card-container">
        {!cargando && pokemon && <PokemonCard pokemon={pokemon} />}
      </div>
    </div>
  );
}

export default App;