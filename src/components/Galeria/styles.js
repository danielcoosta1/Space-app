import styled from "styled-components";

const GaleriaConteiner = styled.section`
  display: flex;
  gap: 24px;
`;

const SecaoFluida = styled.div`
  flex-grow: 1;
  width: 100%;

  h1 {
    font-size: 2rem;
    color: #7b78e5;
  }
`;

const GridFotos = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  padding: 2rem 0;


`;

export { GaleriaConteiner, SecaoFluida, GridFotos };
