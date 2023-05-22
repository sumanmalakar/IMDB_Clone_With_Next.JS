import React from 'react'
import Image from 'next/image';
import LoadingPage from '../loading';

const page = async ({params: {movie}}) => {
  // console.log(params)

  const res = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
  const data = await res.json();
  // console.log(data);

  const img = "https://image.tmdb.org/t/p/original";
  
  return (
    <div className="flex justify-center">
      <div>
  
  {data.backdrop_path ?(
    <Image
    className="my-2"
    src={img + data.backdrop_path}
    width={1000}
    height={1000}
     />

  ):(
      <LoadingPage />
  )
   }
        
      <h2 className="text-2xl">{data.title}</h2>
      <h2 className="text-lg">{data.release_date}</h2>
      <h2>Runtime:{data.runtime} minutes</h2>
      <h2 className="text-sm bg-green-500 inline-block my-2 py-2 px-4 rounded-md">{data.status}</h2>

</div>
    </div>
  )
}

export default page