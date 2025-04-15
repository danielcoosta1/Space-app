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
  position: relative;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  &:hover {
    transform: translateY(-5px);
  }
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
  }
`;

const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  color: #ffffff;
  background: #001634;
  border-radius: 0px 0px 20px 20px;
  min-height: 80px;

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  p {
    color: #d9d9d9;
    font-size: 0.9rem;
  }
`;

const IconesContainer = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  display: flex;

  z-index: 2;
`;

const IconesWrapper = styled.button`
  background: transparent;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$favoritado ? "#FF4081" : "#FFFFFF")};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export {
  GaleriaConteiner,
  SecaoFluida,
  GridFotos,
  CardFoto,
  DivInfo,
  IconesContainer,
  IconesWrapper,
};
