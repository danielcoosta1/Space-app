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
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  padding: 2rem 0;
  gap: 2rem;
`;

const CardFoto = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  &:hover {
    transform: translateY(-5px);
  }
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

const DivInfo = styled.div`
  color: #ffffff;
  background: #001634;

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  p {
    color: #d9d9d9;
    font-size: 0.9rem;
  }
`;

export { GaleriaConteiner, SecaoFluida, GridFotos, CardFoto, DivInfo };
