import { FigureEstilizado,TituloEstilizado } from "./styles"

const Banner = ({children, backGroundImage}) => {
    return (
       <FigureEstilizado $backGroundImage={backGroundImage}>
        <TituloEstilizado>
            {children}
        </TituloEstilizado>
       </FigureEstilizado>
    )
}


export default Banner