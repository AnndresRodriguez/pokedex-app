import axios from "axios";

// Initial Config AXIOS

export default axios.create({
  baseURL: `https://pokeapi.co/api/v2/`,
});