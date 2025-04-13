import styled from "styled-components";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );

  width: 100vw;
  min-height: 100vh;
`;

const AppConteiner = styled.section`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainConteiner = styled.main`
display: flex;
gap: 2rem;
`;

const ConteinerWrapper = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;

`;


export { FundoGradiente, AppConteiner, MainConteiner, ConteinerWrapper};
