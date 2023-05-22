import React from 'react'
import FetchDataClient from './FetchDataClient';

const dataFetch = async () =>{

   const api = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const data = await api.json(); 
  return data;
}

const FetchData = async () => {
    const res = await dataFetch();
    console.log(res);

  return (
   <>
   <div className = "flex justify-center flex-wrap">
   {res.results.map((e)=><FetchDataClient
   key = {e.id}
   id = {e.id}
   title = {e.title}
   backdrop_path = {e.backdrop_path}
   poster_path = {e.poster_path}
   release_date = {e.release_date}
   vote_average = {e.vote_average}
   vote_count = {e.vote_count}

    />)}
    </div>
   </>
  )
}

export default FetchData