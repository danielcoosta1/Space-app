import { AsideEstilizado, NavEstilizado, ListaEstilizada } from "./styles";

import { useState } from "react";

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
  const [itemAtivo, setItemAtivo] = useState("home");

  return (
    <AsideEstilizado>
      <NavEstilizado>
        <ListaEstilizada>
          <ItemNavegacao
            srcAtivo={homeAtivo}
            srcInativo={homeInativo}
            ativo={itemAtivo === "home"}
            onClick={() => setItemAtivo("home")}
          >
            Home
          </ItemNavegacao>
          <ItemNavegacao
            srcAtivo={maisVistasAtivo}
            srcInativo={maisVistasInativo}
            ativo={itemAtivo === "maisVistas"}
            onClick={() => setItemAtivo("maisVistas")}
          >
            Mais vistas
          </ItemNavegacao>
          <ItemNavegacao
            srcAtivo={maisCurtidasAtivo}
            srcInativo={maisCurtidasInativo}
            ativo={itemAtivo === "maisCurtidas"}
            onClick={() => setItemAtivo("maisCurtidas")}
          >
            Mais curtidas
          </ItemNavegacao>
          <ItemNavegacao
            srcAtivo={novasAtivo}
            srcInativo={novasInativo}
            ativo={itemAtivo === "novas"}
            onClick={() => setItemAtivo("novas")}
          >
            Novas
          </ItemNavegacao>
          <ItemNavegacao
            srcAtivo={surpreendaMeAtivo}
            srcInativo={surpreendaMeInativo}
            ativo={itemAtivo === "surpreendaMe"}
            onClick={() => setItemAtivo("surpreendaMe")}
          >
            Surpreenda-me
          </ItemNavegacao>
        </ListaEstilizada>
      </NavEstilizado>
    </AsideEstilizado>
  );
};

export default BarraLateral;
