import Tags from "./Tags";
import Populares from "./Populares";

import {
  GaleriaConteiner,
  SecaoFluida,
  GridFotos,
  CardFoto,
  DivInfo,
  IconesContainer,
  IconesWrapper,
} from "./styles";

import tags from "./Tags/tags.json";
import { useState } from "react";

import { FaHeart, FaRegHeart, FaExpand } from "react-icons/fa";
import ModalAmpliar from "../ModalAmpliar";

const Galeria = ({ fotos }) => {
  const [tagSelecionada, setTagSelecionada] = useState(0);
  const [fotoAmpliada, setFotoAmpliada] = useState(null);
  const [favoritos, setFavoritos] = useState([]);

  const handleClick = (tag) => {
    setTagSelecionada((prev) => (prev === tag.id ? null : tag.id));
  };

  const handleFavoritar = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const fotosFiltradas = tagSelecionada
    ? fotos.filter((foto) => foto.tagId === tagSelecionada)
    : fotos;

  return (
    <>
      <Tags tags={tags} onClick={handleClick} tagSelecionada={tagSelecionada} />
      <GaleriaConteiner>
        <SecaoFluida>
          <h1>Navegue pela galeria</h1>
          <GridFotos>
            {fotosFiltradas.map((foto) => {
              const isFavorito = favoritos.includes(foto.id);
              return (
                <CardFoto key={foto.id}>
                  <img
                    src={foto.path}
                    alt={foto.titulo}
                    className="imagem-foto"
                  />
                  <DivInfo>
                    <h3>{foto.titulo}</h3>
                    <p>Fonte: {foto.fonte}</p>
                  </DivInfo>
                  <IconesContainer>
                    <IconesWrapper
                      onClick={() => handleFavoritar(foto.id)}
                      $favoritado={isFavorito}
                    >
                      {isFavorito ? <FaHeart /> : <FaRegHeart />}
                    </IconesWrapper>
                    <IconesWrapper onClick={() => setFotoAmpliada(foto)}>
                      <FaExpand />
                    </IconesWrapper>
                  </IconesContainer>
                </CardFoto>
              );
            })}
          </GridFotos>
        </SecaoFluida>
        <Populares />
        {fotoAmpliada && (
          <ModalAmpliar
            foto={fotoAmpliada}
            onClose={() => setFotoAmpliada(null)}
            onFavoritar={handleFavoritar}
            isFavorito={favoritos.includes(fotoAmpliada.id)}
          />
        )}
      </GaleriaConteiner>
    </>
  );
};

export default Galeria;
