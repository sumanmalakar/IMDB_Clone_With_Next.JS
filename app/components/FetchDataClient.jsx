import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
const FetchDataClient = ({
    id,
    title,
    backdrop_path,
    poster_path,
    release_date,
    vote_average,
    vote_count
}) => {
    const img = "https://image.tmdb.org/t/p/original";
    console.log(poster_path)
    return (<>

        <div className="m-3 text-center p-3">

            <h1 className="text-xl">{title}</h1>
            <h2 className="text-xl">{release_date}</h2>
            <div className="flex flex-col items-center justify-between p-5" >
                <Link href={`/${id}`}>
                    <Image src={img + poster_path} width={200} height={200}
                    />
                    {/* <div>
             <Image src = {img + backdrop_path} width={200} height = {200} />
             </div> */}
                </Link>
            </div>

        </div>
    </>
    )
}

export default FetchDataClient