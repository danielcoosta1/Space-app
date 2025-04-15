import styled from "styled-components";

const HeaderEstilizado = styled.header`
  display: flex;
  padding: 3.5rem 0;
  justify-content: space-between;

  align-items: center;

  img {
    max-width: 14rem;
  }
`;

const ConteinerInput = styled.div`
  position: relative;

  input {
    height: 3.5rem;
    padding: 0.75rem 1rem;
    border-radius: 10px;
    border: 2px solid;
    border-color: #c98cf1;
    background: transparent;
    box-sizing: border-box;
    width: 35rem;
    color: #d9d9d9;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 20px;

    flex: 1 1 100%;
  }

  img {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
  }
`;

export { HeaderEstilizado, ConteinerInput };
