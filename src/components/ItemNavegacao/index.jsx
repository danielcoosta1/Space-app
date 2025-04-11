import { ItemListaEstilizado } from "./styles";

const ItemNavegacao = ({ children, onClick, srcAtivo, srcInativo, ativo = false }) => {
  return (
    <ItemListaEstilizado $bgAtivo={ativo} onClick={onClick}>
      <img src={ativo ? srcAtivo : srcInativo} />
      {children}
    </ItemListaEstilizado>
  );
};

export default ItemNavegacao;
