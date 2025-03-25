import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import Pesquisa from './components/Pesquisa';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hospedagem from './pages/Hospedagem';
import Passagem from './pages/Passagem';
import Pacote from './pages/Pacote';
import Viagem from './pages/Viagem';
import Carro from './pages/Carro';




function App() {


  return (
    <BrowserRouter>
     <div className='container'>
     <Header/>
     <Pesquisa />
     <Routes>
      <Route  path='/' element={<Hospedagem />}/>
      <Route  path='/passagens' element={<Passagem />}/>
      <Route  path='/pacotes' element={<Pacote />}/>
      <Route  path='/viagens' element={<Viagem />}/>
      <Route  path='/carros' element={<Carro />}/>
    </Routes>
     <Footer />
    </div>
    </BrowserRouter>
   
  )
}

export default App
