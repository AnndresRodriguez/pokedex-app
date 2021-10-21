// COMMON FUNCTIONS
export function removeFavorite(state, payload) {
  state.pokemons = state.pokemons.map((pokemon) => {
    if (pokemon.name == payload) {
      pokemon.favorite = false;
    }
    return pokemon;
  });
}

export function removePokemon(state, payload) {
  state.pokemonsFavorites = state.pokemonsFavorites.filter((pokemon) => {
    if (pokemon.name != payload) {
      return pokemon;
    }
  });
}

export function addFavorite(state, payload) {
  state.pokemons = state.pokemons.map((pokemon) => {
    if (pokemon.name == payload.name) {
      pokemon.favorite = true;
    }
    return pokemon;
  });
}
