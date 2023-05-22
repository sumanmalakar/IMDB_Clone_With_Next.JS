import React from 'react'
import Link from 'next/link'

const pages = () => {
  return (
    <div className="flex bg-slate-800">
        <Link href="/" className="p-4 hover:bg-slate-950 hover:text-xl text-lg">Home</Link>
        <Link href="/about" className="p-4 hover:bg-slate-950 hover:text-xl text-lg">about</Link>
        <Link href="/movies" className="p-4 hover:bg-slate-950 hover:text-xl text-lg">movies</Link>
        <Link href="/popular" className="p-4 hover:bg-slate-950 hover:text-xl text-lg">popular</Link>
    </div>
  )
}

export default pages