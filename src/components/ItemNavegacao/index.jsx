import { ItemListaEstilizado } from "./styles";

import { useState } from "react";

const ItemNavegacao = ({ children, $bgAtivo, $bgInativo }) => {
  const [ativo, setAtivo] = useState(false);

  const handleClick = (ativo) => {
    ativo = !ativo;
    setAtivo(ativo);
  };

  return (
    <ItemListaEstilizado>
      <img src={ativo ? $bgAtivo : $bgInativo} />
      <a onClick={handleClick}>{children}</a>
    </ItemListaEstilizado>
  );
};

export default ItemNavegacao;
