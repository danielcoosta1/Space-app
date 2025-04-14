import styled from "styled-components";

const ConteinerTag = styled.section`
  display: flex;
  align-items: center;
  gap: 5rem;
  margin: 3rem 0;

  p {
    font-size: 1.5rem;
    color: #d9d9d9;
  }
`;

const TagsDiv = styled.div`
  display: flex;
  gap: 1.25rem;
`;

const BotaoTag = styled.button.attrs({ type: "button" })`
  color: #ffffff;
  padding: 10px 8px;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid
    ${(props) => (props.$selecionada ? "#C98CF1" : "transparent")};
  transition: all 0.3s ease;

  &:hover {
    border-color: #c98cf1;
  }
`;

export { ConteinerTag, TagsDiv, BotaoTag };
