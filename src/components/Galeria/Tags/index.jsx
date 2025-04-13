import { ConteinerTag, TagsDiv, BotaoTag } from "./styles";
const Tags = ({ tags, onClick, tagSelecionada }) => {
  return (
    <ConteinerTag>
      <p>Busque por tags: </p>
      <TagsDiv>
        {tags.map((tag) => (
          <BotaoTag
            $selecionada={tag.id === tagSelecionada}
            onClick={() => onClick(tag)}
            key={tag.id}
          >
            {tag.titulo}
          </BotaoTag>
        ))}
      </TagsDiv>
    </ConteinerTag>
  );
};

export default Tags;
