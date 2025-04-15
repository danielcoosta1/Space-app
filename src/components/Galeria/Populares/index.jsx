import {
  ConteinerPrincipal,
  ConteinerFotos,
  ImgEstilizada,
  ButtonEstilizado,
} from "./styles";

import foto1 from "/imagens/populares/foto-1.png";
import foto2 from "/imagens/populares/foto-2.png";
import foto3 from "/imagens/populares/foto-3.png";
import foto4 from "/imagens/populares/foto-4.png";
import foto5 from "/imagens/populares/foto-5.png";

const Populares = () => {
  return (
    <ConteinerPrincipal>
      <h1>Populares</h1>
      <ConteinerFotos>
        <ImgEstilizada src={foto1} />
        <ImgEstilizada src={foto2} />
        <ImgEstilizada src={foto3} />
        <ImgEstilizada src={foto4} />
        <ImgEstilizada src={foto5} />
      </ConteinerFotos>
      <ButtonEstilizado>Ver mais</ButtonEstilizado>
    </ConteinerPrincipal>
  );
};

export default Populares;
