import Cabecalho from "./components/Cabecalho";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import Rodape from "./components/Rodape";

import {
  FundoGradiente,
  AppConteiner,
  MainConteiner,
  ConteinerWrapper,
} from "./Styles";

import backGroundImage from "../src/assets/banner.png";
import Galeria from "./components/Galeria";

import fotos from "./fotos.json";



const App = () => {
  return (
    <FundoGradiente>
      <AppConteiner>
        <Cabecalho />
        <MainConteiner>
          <BarraLateral />
          <ConteinerWrapper>
            <Banner backGroundImage={backGroundImage}>
              A galeria mais completa de fotos do espaço!
            </Banner>
            <Galeria fotos={fotos} />
          </ConteinerWrapper>
        </MainConteiner>
      </AppConteiner>
      <Rodape/>
    </FundoGradiente>
  );
};

export default App;
