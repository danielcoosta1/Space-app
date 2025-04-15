import { HeaderEstilizado, ConteinerInput } from "./styles";
import searchImg from "/icones/search.png";
import logoImg from "/imagens/logo.png";

const Cabecalho = () => {
  return (
    <HeaderEstilizado>
      <img src={logoImg} alt="Logo principal do" />
      <ConteinerInput>
        <input placeholder="O que você procura ?" />
        <img src={searchImg} />
      </ConteinerInput>
    </HeaderEstilizado>
  );
};

export default Cabecalho;
