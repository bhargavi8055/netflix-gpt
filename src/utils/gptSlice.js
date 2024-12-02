import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieNames:null,
        movieResultsTMDB:null,
        gptSearchKey:null,
        
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGPTMovieResults:(state,action)=>{
            const {movieNames,movieResultsTMDB}= action.payload;
            state.movieNames=movieNames;
            state.movieResultsTMDB=movieResultsTMDB;

        },
        addGPTSearchKey:(state,action)=>{
            state.gptSearchKey = action.payload;
        }
    }
});

export const {toggleGptSearchView,addGPTMovieResults,addGPTSearchKey} = gptSlice.actions;
export default gptSlice.reducer;