import Cabecalho from "./components/Cabecalho";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";

import {
  FundoGradiente,
  AppConteiner,
  MainConteiner,
  ConteinerWrapper,
} from "./Styles";

import backGroundImage from "../src/assets/banner.png";
import Galeria from "./components/Galeria";

import fotos from "./fotos.json"
import { useState } from "react";


const App = () => {

  const [fotosGaleria, setFotosGaleria] =  useState(fotos);

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
            <Galeria
            fotos={fotosGaleria}
             />
          </ConteinerWrapper>
        </MainConteiner>
      </AppConteiner>
    </FundoGradiente>
  );
}

export default App;
