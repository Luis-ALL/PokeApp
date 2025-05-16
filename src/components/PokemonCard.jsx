function PokemonCard({ pokemon }) {
    return (
        <div className="card card-all-data p-4 mt-lg-4 mb-4 mb-md-0">
            <div className="container-poke-name">
                <h2 className="text-capitalize">{pokemon.name}</h2>
                <div className="border"></div>
            </div>
            <div className="d-flex flex-column flex-md-row gap-4">
                <div className="container-poke-img text-center">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    <div className="vr border"></div>
                </div>

                <div className="container-data w-100">
                    <div className="mb-3">
                        <p><strong>Tipo(s):</strong> {pokemon.types.map((t) => t.type.name).join(", ")}</p>
                        <p><strong>Habilidades:</strong> {pokemon.abilities.map((a) => a.ability.name).join(", ")}</p>
                        <p><strong>Estatura:</strong> {(pokemon.height * 10)} cm </p>
                        <p><strong>Peso:</strong> {(pokemon.weight / 10)} kg</p>
                    </div>

                    <div className="mb-3">
                        <strong>Estadísticas</strong>
                        <table className="table table-sm table-bordered mt-2">
                            <tbody>
                                {pokemon.stats.map((s) => (
                                    <tr key={s.stat.name}>
                                        <td className="text-capitalize">{s.stat.name}</td>
                                        <td>{s.base_stat}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <strong>Movimientos</strong>
                        <table className="table table-sm table-striped mt-2">
                            <tbody>
                                {pokemon.moves.slice(0, 5).map((m) => (
                                    <tr key={m.move.name}>
                                        <td className="text-capitalize">{m.move.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;