import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice ({
    name:"movieList",
    initialState:{
        nowPlayingMovies:null,
        bgRunningTrailer:null,
    },
    reducers:{
        addMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.bgRunningTrailer=action.payload;
        }
    }
})

export const {addMovies,addMovieTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;