import Cabecalho from "./components/Cabecalho";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";

import { FundoGradiente, AppConteiner } from "./Styles";

import backGroundImage from "../src/assets/banner.png";

function App() {
  return (
    <FundoGradiente>
      <AppConteiner>
        <Cabecalho />
        <BarraLateral />
        <Banner backGroundImage={backGroundImage}>
          A galeria mais completa de fotos do espaço!
        </Banner>
      </AppConteiner>
    </FundoGradiente>
  );
}

export default App;
