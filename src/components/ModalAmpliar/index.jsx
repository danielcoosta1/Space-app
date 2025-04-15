import { FaHeart, FaRegHeart, FaTimes } from "react-icons/fa";
import { 
  ModalOverlay, 
  ModalContent, 
  ModalClose,
  ModalFooter,
  IconeWrapper
} from "./styles";

const ModalAmpliar = ({ foto, onClose, onFavoritar, isFavorito }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalClose onClick={onClose} aria-label="Fechar">
          <FaTimes />
        </ModalClose>
        
        <img src={foto.path} alt={foto.titulo} />
        
        <ModalFooter>
          <div className="info">
            <h3>{foto.titulo}</h3>
            <p>Fonte: {foto.fonte}</p>
          </div>
          
          <IconeWrapper 
            onClick={() => onFavoritar(foto.id)}
            $favoritado={isFavorito}
            aria-label={isFavorito ? "Desfavoritar" : "Favoritar"}
          >
            {isFavorito ? <FaHeart /> : <FaRegHeart />}
          </IconeWrapper>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalAmpliar;