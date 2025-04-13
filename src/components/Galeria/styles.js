import styled from "styled-components";

const GaleriaConteiner = styled.section`
  display: flex;
  gap: 24px;
`;

const SecaoFluida = styled.div`
  flex-grow: 1;

  h1 {
    font-size: 2rem;
    color: #7b78e5;
  }
`;

export { GaleriaConteiner, SecaoFluida };
