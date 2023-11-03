
import './App.css'
// import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/NavBar/Navbar'
import PriceOPtions from './Components/PriceOptions/PriceOPtions'

function App() {


  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-3xl font-bold bg-red-400">
        Hello world!
      </h1>
      <PriceOPtions></PriceOPtions>
    </>
  )
}

export default App
