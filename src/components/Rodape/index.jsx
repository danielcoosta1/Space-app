import { Footer, RedesSociais, Img } from "./styles";
import ig from "/imagens/sociais/instagram.svg";
import fb from "/imagens/sociais/facebook.svg";
import tt from "/imagens/sociais/twitter.svg";

const Rodape = () => {
  return (
    <Footer>
      <RedesSociais>
        <Img src={ig} />
        <Img src={fb} />
        <Img src={tt} />
      </RedesSociais>
      <p>Desenvolvido por alura</p>
    </Footer>
  );
};

export default Rodape;
