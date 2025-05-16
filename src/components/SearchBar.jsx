function SearchBar({ nombre, onChange, buscarPokemon }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        buscarPokemon();
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column flex-md-row gap-3 gap-md-0">
            <input
                type="text"
                value={nombre}
                onChange={onChange}
                placeholder="Escribe el nombre de un Pokémon"
                className="form-control me-2 input-search"
                maxLength={20}
            />
            <button type="submit" className="btn poke-btn">
                Buscar
            </button>
        </form>
    );
}

export default SearchBar;