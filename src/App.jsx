import Navbar from "./components/Navbar"
import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Platform from "./pages/Platform"
import Prising from "./pages/Prising"
import Support from "./pages/Support"

function App() {
  return (
    <div>
     <Navbar/>
     <main>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/platform" element={<Platform/>}/>
        <Route path="/prising" element={<Prising/>}/>
        <Route path="/support" element={<Support/>}/>
      </Routes>
    </main>
    </div>
   
  )
}

export default App
