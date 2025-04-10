import styled from "styled-components";
import GlobalStyle from "./components/EstilosGlobais"

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



function App() {
  return (
    <FundoGradiente>
      <GlobalStyle/>
    </FundoGradiente>
  );
}

export default App;
