import styled from "styled-components"
import { Plus } from "../svg&image/svg/svgExport"
import {useSelector } from 'react-redux';
const BlockArrHead = styled.div`
display: flex;
padding: 50px 0;
`

export const ArrHeadSvg = styled.span`
margin-right: 15px;
color:#2acc2a;
display: flex;
align-items: center;
`

const HeaderText = styled.p`
font-weight: 500;
font-size: 20px;
color:#4a4b4b;

`
export const MainHeader = ({ newTitle })=>{
  const updatedItems = useSelector((state) => state.updatedItems);


    return(
    <BlockArrHead>
    <ArrHeadSvg>
  <Plus/>
  </ArrHeadSvg>
  <HeaderText>{newTitle} / {updatedItems.length}</HeaderText>

  </BlockArrHead>
    )
}