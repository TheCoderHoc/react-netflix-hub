import axios from "axios";

const instance = axios.create({
    // Replace this with the correct base url from TMDB
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;
