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
import ModalAmpliar from "./ModalAmpliar";

const Galeria = ({ fotos }) => {
  const [tagSelecionada, setTagSelecionada] = useState(0);
  const [fotoAmpliada, setFotoAmpliada] = useState(null);
  const [favoritos, setFavoritos] = useState([]);

  const handleClick = (tag) => {
    setTagSelecionada((prev) => (prev === tag.id ? null : tag.id));
  };

  const handleFavoritar = (foto) => {
    setFavoritos((prev) => {
      // Verifica se a foto já está nos favoritos pelo ID
      const isFavorito = prev.some((favorito) => favorito.id === foto.id);

      return isFavorito
        ? prev.filter((favorito) => favorito.id !== foto.id)
        : [...prev, foto];
    });
  };

  const fotosFiltradas = tagSelecionada
    ? fotos.filter((foto) => foto.tagId === tagSelecionada)
    : fotos;

  const isFavorito = (foto) => {
    return favoritos.some((favorito) => favorito.id === foto.id);
  };

  return (
    <>
      <Tags tags={tags} onClick={handleClick} tagSelecionada={tagSelecionada} />
      <GaleriaConteiner>
        <SecaoFluida>
          <h1>Navegue pela galeria</h1>
          <GridFotos>
            {fotosFiltradas.map((foto) => {
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
                      onClick={() => handleFavoritar(foto)}
                      $favoritado={isFavorito(foto)}
                    >
                      {isFavorito(foto) ? <FaHeart /> : <FaRegHeart />}
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
            isFavorito={isFavorito(fotoAmpliada)}
          />
        )}
      </GaleriaConteiner>
    </>
  );
};

export default Galeria;
