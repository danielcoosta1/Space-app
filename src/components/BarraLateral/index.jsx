import {
  AsideEstilizado,
  NavEstilizado,
  ListaEstilizada,
  ItemListaEstilizado,
} from "./styles";

// import homeInativo from "/icones/home-inativo.png";
// import homeAtivo from "/icones/home-ativo.png";

// import maisVistasInativo from "/icones/mais-vistas-inativo.png";
// import maisVistasAtivo from "/icones/mais-vistas-ativo.png";

// import maisCurtidasInativo from "/icones/mais-curtidas-inativo.png";
// import maisCurtidasAtivo from "/icones/mais-curtidas-ativo.png";

// import novasInativo from "/icones/novas-inativo.png";
// import novasAtivo from "/icones/novas-ativo.png";

// import surpreendaMeInativo from "/icones/surpreenda-me-inativo.png";
// import surpreendaMeAtivo from "/icones/surpreenda-me-ativo.png";

const BarraLateral = () => {
  return (
    <AsideEstilizado>
      <NavEstilizado>
        <ListaEstilizada>
          <ItemListaEstilizado>
            <a>Início</a>
          </ItemListaEstilizado>
          <ItemListaEstilizado>
            <a>Mais vistas</a>
          </ItemListaEstilizado>
          <ItemListaEstilizado>
            <a>Mais curtidas</a>
          </ItemListaEstilizado>
          <ItemListaEstilizado>
            <a>Novas</a>
          </ItemListaEstilizado>
          <ItemListaEstilizado>
            <a>Surpreenda-me</a>
          </ItemListaEstilizado>
        </ListaEstilizada>
      </NavEstilizado>
    </AsideEstilizado>
  );
};

export default BarraLateral;
