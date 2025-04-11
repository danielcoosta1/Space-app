import styled from "styled-components";

const ItemListaEstilizado = styled.li`
  display: flex;
  align-items: center;
  color: ${(props) => (props.$bgAtivo ? "#7B78E5" : "#D9D9D9")};

  font-size: 2rem;
  line-height: 29px;

  cursor: pointer;

  &:hover {
    color: #7b78e5; // Cor ao passar o mouse
  }

  img {
    width: 32px;
    height: 32px;
  }
`;

export { ItemListaEstilizado };
