import Tags from "./Tags";
import Populares from "./Populares";
import { GaleriaConteiner, SecaoFluida } from "./styles";
import tags from "./Tags/tags.json";
import { useState } from "react";

const Galeria = () => {
  const [tagSelecionada, setTagSelecionada] = useState(null);
  const handleClick = (tag) => {
    setTagSelecionada((prev) => (prev === tag.id ? null : tag.id));
  };

  return (
    <>
      <Tags tags={tags} onClick={handleClick} tagSelecionada={tagSelecionada} />
      <GaleriaConteiner>
        <SecaoFluida>
          <h1>Navegue pela galeria</h1>
        </SecaoFluida>
        <Populares />
      </GaleriaConteiner>
    </>
  );
};

export default Galeria;
