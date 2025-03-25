import './style.css'
import bed from '../../assets/img/bed-outline.svg'
import airphone from '../../assets/img/airplane-outline.svg'
import pacote from '../../assets/img/briefcase-outline.svg'
import ticket from '../../assets/img/ticket-outline.svg'
import car from '../../assets/img/car-outline.svg'
import { Link } from 'react-router-dom'

const  Nav =()=> {
  return (
    <div className="Nav">
      <div className="Nav_Container">
        <Link to='/'>
        <a className="Icon_nav" >
          <img className="Icons" src={bed} alt="cama" />
          Hospedagens
        </a>
        </Link> 
        <Link to='/passagens'>
        <a className="Icon_nav" >
          <img
            className="Icons"
            src={airphone}
            alt="cama"
          />
          Passagens
        </a>
        </Link>
        <Link to="/pacotes">
        <a className="Icon_nav" href="/">
          <img
            className="Icons"
            src={pacote}
            alt="cama"
          />
          Pacotes
        </a>
        </Link>
        <Link to="/viagens">
        <a className="Icon_nav" href="/">
          <img className="Icons" src={ticket} alt="cama" />{" "}
          Viagem
        </a>
        </Link>
        <Link to="/carros">
        <a className="Icon_nav" href="/">
          <img className="Icons" src={car} alt="cama" />{" "}
          Carros
        </a>
        </Link>
        
      </div>
    </div>
  );
}
export default Nav;
