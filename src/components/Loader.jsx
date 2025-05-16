import pokeLoader from '../assets/img/pokeLoader.gif';

function Loader() {
    return (
        <div className="loader-overlay">
            <div className="loader-content">
                <img src={pokeLoader} alt="Cargando..." />
                <p className="text-white mt-3">Cargando...</p>
            </div>
        </div>
    );
}

export default Loader;
