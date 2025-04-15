import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 95%; // Aumentado de 90% para 95%
  max-height: 95%; // Aumentado de 90% para 95%
  min-width: 800px; // Largura mínima aumentada
  min-height: 600px; // Altura mínima aumentada
  background: #041833;
  padding: 3rem; // Aumentado de 2rem para 3rem
  border-radius: 20px; // Borda mais arredondada
  display: flex;
  flex-direction: column;
  gap: 2rem; // Aumentado o espaçamento interno

  animation: scaleUp 0.3s ease;

  @keyframes scaleUp {
    from {
      transform: scale(0.8);
    }
    to {
      transform: scale(1);
    }
  }

  img {
    max-width: 100%;
    max-height: 80vh; // Aumentado de 70vh para 80vh
    min-height: 500px; // Altura mínima da imagem
    object-fit: contain;
    border-radius: 15px;
  }
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  color: white;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  .info {
    flex: 1;

    h3 {
      color: #ffffff;
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    p {
      color: #d9d9d9;
      font-size: 1.2rem;
    }
  }
`;

export const IconeWrapper = styled.button`
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
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
    width: 30px;
    height: 30px;
  }
`;
