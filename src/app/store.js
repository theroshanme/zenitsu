import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/TMDB";
import currentGenreOrCategoryReducer, {
  genreOrCategory,
} from "../features/currentGenreOrCategory";

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: currentGenreOrCategoryReducer,
  },
});
