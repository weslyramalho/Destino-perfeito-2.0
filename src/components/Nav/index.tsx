import './style.css'
import bed from '../../assets/img/bed-outline.svg'
import airphone from '../../assets/img/airplane-outline.svg'
import pacote from '../../assets/img/briefcase-outline.svg'
import ticket from '../../assets/img/ticket-outline.svg'
import car from '../../assets/img/car-outline.svg'
function Nav() {
  return (
    <div className="Nav">
      <div className="Nav_Container">
        <a className="Icon_nav" href="/">
          <img className="Icons" src={bed} alt="cama" />{" "}
          Hospedagens
        </a>
        <a className="Icon_nav" href="/">
          <img
            className="Icons"
            src={airphone}
            alt="cama"
          />{" "}
          Passagens
        </a>
        <a className="Icon_nav" href="/">
          <img
            className="Icons"
            src={pacote}
            alt="cama"
          />{" "}
          Pacotes
        </a>
        <a className="Icon_nav" href="/">
          <img className="Icons" src={ticket} alt="cama" />{" "}
          Viagem
        </a>
        <a className="Icon_nav" href="/">
          <img className="Icons" src={car} alt="cama" />{" "}
          Carros
        </a>
      </div>
    </div>
  );
}
export default Nav;
