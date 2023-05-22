import Image from 'next/image'
import FetchData from './components/FetchData'

export default function Home() {
  return (
    <main className="pt-9 m-5">
    {/* <h1>This is Home Page</h1> */}
    <FetchData />
    </main>
  )
}
