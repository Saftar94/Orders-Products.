import { openModal } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Trash } from "../svg&image/svg/svgExport";
import styled from "styled-components";

const ButtonTrash = styled.button`
color: #696767;
`
export  const TrashButtonOrder = ({ itemId }) => {
    const dispatch = useDispatch();
  
    const handleRemoveTodo = () => {
      dispatch(openModal(itemId));
    };
  
    return (
      <ButtonTrash onClick={handleRemoveTodo}>
        <Trash />
      </ButtonTrash>
    );
  };