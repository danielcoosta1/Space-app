import styled from "styled-components";

const FigureEstilizado = styled.figure`
  background-image: ${(props) => `url(${props.$backGroundImage})`};
  flex-grow: 1;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  min-height: 328px;
  margin: 0;
  border-radius: 20px;
  max-width: 100%;
  background-size: cover;
`;

const TituloEstilizado = styled.h1`

font-weight: 400;
font-size:35px;
line-height: 48px;
color:#FFFFFF;
max-width: 350px;
padding: 0 64px;
`;

export { FigureEstilizado, TituloEstilizado };
