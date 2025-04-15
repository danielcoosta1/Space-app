import styled from "styled-components";

const ConteinerPrincipal = styled.section`

  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  h1 {
    font-size: 2rem;
    color: #7b78e5;
  }
`;

const ConteinerFotos = styled.div`
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
display: flex;
flex-direction: column;
gap: 2rem;

`;

const ImgEstilizada = styled.img`
&:hover {
    transform: translateY(-5px);
  }
border-radius: 20px;
width: 212px;
height: 158px;
`;

const ButtonEstilizado = styled.button`
cursor: pointer;

color: #FFFFFF;
font-size: 20px;
border: 2px solid #C98CF1;
padding: 1rem 1.5rem;
border-radius: 10px;
background-color: transparent;
width: 80%;

&:hover{
  background: linear-gradient(90deg, #C98CF1 0%, #7B78E5 100%);
}
`;

export { ConteinerPrincipal, ConteinerFotos, ImgEstilizada, ButtonEstilizado };
 