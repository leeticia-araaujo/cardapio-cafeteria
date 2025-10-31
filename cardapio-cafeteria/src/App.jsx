import { useState } from 'react'
import './App.css'
import Banner from './components/Banner.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'

function App() {

  const [numItemSelecionado, setNumItemSelecionado] = useState(0);

  return(
    <div className='container'>
      <Banner/>
      <Nav 
        numItemSelecionado = {numItemSelecionado}
        setNumItemSelecionado = {setNumItemSelecionado}
      />
      <Footer />
    </div>
  )
}

export default App
