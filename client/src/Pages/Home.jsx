import React, { useEffect, useState } from 'react'
import fetchData from '../Components/MemeFetch';
import Card from './Card';

function Home() {

    const [data , setData] = useState([]);

    useEffect(()=>{
        fetchData().then((e) =>{
            setData(e.data.memes);
        })
    },[])

  return (
    <>
    <h1 className='text-4xl font-extrabold flex justify-center items-center text-center mb-6'>
      Meme Generator
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
      {data && data.map((e) => (
        <Card key={e.id} name={e.name} img={e.url} />
      ))}
    </div>
  </>
  )
}

export default Home
