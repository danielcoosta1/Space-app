import Tags from "./Tags";
import Populares from "./Populares";
import { GaleriaConteiner, SecaoFluida, GridFotos, CardFoto, DivInfo } from "./styles";
import tags from "./Tags/tags.json";
import { useState } from "react";

const Galeria = ({ fotos }) => {
  const [tagSelecionada, setTagSelecionada] = useState(0);

  const handleClick = (tag) => {
    setTagSelecionada((prev) => (prev === tag.id ? null : tag.id));
  };

  const fotosFiltradas = tagSelecionada
    ? fotos.filter(foto => foto.tagId === tagSelecionada)
    : fotos;

  return (
    <>
      <Tags
        tags={tags}
        onClick={handleClick}
        tagSelecionada={tagSelecionada} />
      <GaleriaConteiner>
        <SecaoFluida>
          <h1>Navegue pela galeria</h1>
          <GridFotos>
            {fotosFiltradas.map((foto) => (
              <CardFoto key={foto.id} >
                <img
                  src={foto.path}
                  alt={foto.titulo}
                />
                <DivInfo>
                  <div>
                    <h3>{foto.titulo}</h3>
                    <p>Fonte: {foto.fonte}</p>
                  </div>
                  <div>

                  </div>

                </DivInfo>
              </CardFoto>
            ))}
          </GridFotos>
        </SecaoFluida>
        <Populares />
      </GaleriaConteiner>
    </>
  );
};

export default Galeria;
