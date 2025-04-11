import { AsideEstilizado, NavEstilizado, ListaEstilizada } from "./styles";

import ItemNavegacao from "../ItemNavegacao";

import homeInativo from "/icones/home-inativo.png";
import homeAtivo from "/icones/home-ativo.png";

import maisVistasInativo from "/icones/mais-vistas-inativo.png";
import maisVistasAtivo from "/icones/mais-vistas-ativo.png";

import maisCurtidasInativo from "/icones/mais-curtidas-inativo.png";
import maisCurtidasAtivo from "/icones/mais-curtidas-ativo.png";

import novasInativo from "/icones/novas-inativo.png";
import novasAtivo from "/icones/novas-ativo.png";

import surpreendaMeInativo from "/icones/surpreenda-me-inativo.png";
import surpreendaMeAtivo from "/icones/surpreenda-me-ativo.png";

const BarraLateral = () => {
  return (
    <AsideEstilizado>
      <NavEstilizado>
        <ListaEstilizada>
          <ItemNavegacao $bgAtivo={homeAtivo} $bgInativo={homeInativo} ativo>
            Home
          </ItemNavegacao>
          <ItemNavegacao
            $bgAtivo={maisVistasAtivo}
            $bgInativo={maisVistasInativo}
          >
            Mais vistas
          </ItemNavegacao>
          <ItemNavegacao
            $bgAtivo={maisCurtidasAtivo}
            $bgInativo={maisCurtidasInativo}
          >
            Mais curtidas
          </ItemNavegacao>
          <ItemNavegacao $bgAtivo={novasAtivo} $bgInativo={novasInativo} ativo>
            Novas
          </ItemNavegacao>
          <ItemNavegacao
            $bgAtivo={surpreendaMeAtivo}
            $bgInativo={surpreendaMeInativo}
          >
            Surpreenda-me
          </ItemNavegacao>
        </ListaEstilizada>
      </NavEstilizado>
    </AsideEstilizado>
  );
};

export default BarraLateral;
