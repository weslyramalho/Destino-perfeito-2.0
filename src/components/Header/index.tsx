import logoDestiniPerfeito from '../../assets/img/DestinoPerfeito.png'
import logoWatsap from '../../assets/img/logo-whatsapp.svg'
import Nav from '../Nav';
import './style.css'
function Header() {
  return (
    <>
    <div className="Header">
      <div className="logo">
        <img src={logoDestiniPerfeito} alt="LOGO DESTINO PERFEITO" />
      </div>
      <div className="Header_Info">
        <div className="Contato">
          <a className="Telefone" href="http://wa.me/5594991033978">
            {" "}
            <img
              className="Icons"
              src={logoWatsap}
              alt="atendente"
            />{" "}
          </a>
        </div>
        <div className="Login">
          <a href="/">Login</a>{" "}
        </div>
      </div>
      
    </div>
    <Nav />
    </>
  );
}

export default Header;
