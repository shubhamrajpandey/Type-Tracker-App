import { useState } from 'react'
import { Header, Footer } from './components'
import { Outlet,useSearchParams } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInput = (e) => {
    setSearchParams({ query: e.target.value });
  };
  return (
    <>
     <Header handleInput={handleInput}/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
