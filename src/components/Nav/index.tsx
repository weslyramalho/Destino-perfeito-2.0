import "./style.css";
import bed from "../../assets/img/bed-outline.svg";
import airphone from "../../assets/img/airplane-outline.svg";
import pacote from "../../assets/img/briefcase-outline.svg";
import ticket from "../../assets/img/ticket-outline.svg";
import car from "../../assets/img/car-outline.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="Nav_Container">
        <Link to="/hospedagens" className="Icon_nav">
          <img className="Icons" src={bed} alt="cama" />
          Hospedagens
        </Link>
        <Link to="/passagens" className="Icon_nav">
          <img className="Icons" src={airphone} alt="cama" />
          Passagens
        </Link>
        <Link to="/pacotes" className="Icon_nav">
          <img className="Icons" src={pacote} alt="cama" />
          Pacotes
        </Link>
        <Link to="/viagens" className="Icon_nav">
          <img className="Icons" src={ticket} alt="cama" />
          Viagem
        </Link>
        <Link to="/carros" className="Icon_nav">
          <img className="Icons" src={car} alt="cama" />
          Carros
        </Link>
      </div>
    </div>
  );
};
export default Nav;
