import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import Pesquisa from './components/Pesquisa';
import Footer from './components/Footer';

function App() {


  return (
    <div className='container'>
     <Header/>
     <Pesquisa />
     <Footer />
    </div>
  )
}

export default App
