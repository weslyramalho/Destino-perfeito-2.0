import "./styled.css";

const Pesquisa = () => {
  return (
    <div className="Pesquisa container-fluid">
      <div className="Pesquisa_area ">
        <div className="Pesquisa_area_dados">
          <div className="Area_input">
            <div className="Area_input_btn">
              <form id="Form" action="/submit" method="post">
                <div className="Form_Label">
                  <h1>Destinos</h1>
                </div>
                <div className="Input">
                  <div className="Input_text" id="origemInput">
                    <label className="fs-6 m-2" htmlFor="destino">
                      Destino
                    </label>
                    <input
                      className="Campo_input"
                      type="text"
                      id="destino"
                      name="destino"
                      placeholder="Digite o seu destino"
                    />
                  </div>
                  <div className="Input_calendario">
                    <label className="fs-6  m-2" htmlFor="origem">
                      Datas
                    </label>
                    <input
                      className="ca1 Campo_input"
                      type="date"
                      id="ida"
                      name="ida"
                      placeholder="Ida"
                    />
                    Desde
                    <input
                      className="ca2 Campo_input"
                      type="date"
                      id="volta"
                      name="volta"
                      placeholder="Volta"
                    />
                    Até
                  </div>
                </div>
                <div className="area__bt ">
                  <button className="Btn_1">Buscar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pesquisa;
