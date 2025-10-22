import Axios from "axios";

export const getAllCharacters = async (setCharacters) => {
  try {
    const response = await Axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    console.log("response", response.data.results);
    setCharacters(response.data.results);
  } catch (error) {
    console.log("Error fetching characters:", error);
  }
};
