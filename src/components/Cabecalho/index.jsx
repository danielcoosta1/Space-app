
import { HeaderEstilizado, ImgEstilizado, InputEstilizado } from "./styles"

import logoImg from "/imagens/logo.png"

const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <ImgEstilizado src={logoImg}/>
            <div>
            <InputEstilizado placeholder="O que você procura ?"/>
            

            </div>
           
        </HeaderEstilizado>
    )
}

export default Cabecalho