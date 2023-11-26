import React from 'react';
import styled from 'styled-components';
import { CloseSVG } from '../svg&image/svg/svgExport';
import { useSelector } from 'react-redux';
import { countProductsPerOrder } from '../groups/groupProducts';
import { FormatDate } from '../main/formatDate';
import { Trash } from '../svg&image/svg/svgExport';

const ModalBlock  = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.7);
z-index: 1000;

&:target {
  background-color: rgba(0, 0, 0, 0.9);
}
  `
  const Modalcontent  = styled.div`

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  background-color: white;
  border-radius: 8px;
  `
  const ModalHeader  = styled.p`
  font-size: 13px;
  font-weight: 600;
  padding: 20px 20px;
}

`
  
  const CloseModal = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  top: -12px;
  right: -8px;
  width: 24px;
  height: 24px;
  border: 1px solid rgba(2,9,13,0.31);
  border-radius: 20px;
  background-color: white;
  `

  const ProductList = styled.li`
  justify-content: space-between;
  padding: 25px 20px;
  border-radius: 9px;
  list-style-type: none;
  display: flex;
  flex-direction: initial;
  align-items: center;
  box-shadow: 0px -2px 2px -3px #000000;
  transition: transform 0.2s ease;

&:last-child {
  margin-bottom: 0;
}

&:hover {
  transform: translateY(-5px);
}

`
const ProduxText = styled.p`
position: relative;
display: inline-block;
color: #696767;
font-size: 18px;
text-align: justify;
white-space: pre-line;
text-decoration: underline;
text-underline-position: under;
text-decoration-color:  #c5c5c5;
color: #696767;
`
const TotalProduc = styled.span`
color: #696767;
font-size: 18px;
`

const ProducText = styled.span`
color: #696767;
font-size: 10px;
`

const BlockTotal= styled.div`
display: flex;
flex-direction:column;
`

const FormDate = styled.p`
color: #696767;
font-size: 12px;
margin-bottom: 3px;
`
const DateBlock = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const ButtonBlock = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
background-color: #279227;
padding: 30px 20px;
`
const CancelButton = styled.button`
margin-right: ${({ isCancel }) => (isCancel ? "50px" : "0")};
display: flex;
align-items: center;
padding: 10px 20px;
font-size: 13px;
color: #ffff;
background-color:  #279227;
border-radius: 22px;
cursor: pointer;
&:hover {
  color: #d9534f;
  background-color: #ffff;
  border-radius: 22px;
}

&:active {
  color: #d9534f;
  background-color: #ffff;
}
}
`
const DeleteButton = styled.button`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    font-size: 13px;
    color: #ffff;
    background-color:  #279227;
    border-radius: 22px;
    cursor: pointer;
    &:hover {
     
      color: #d9534f;
      background-color: #ffff;
      border-radius: 22px;

    }
  
    &:active {
      color: #d9534f;
      background-color: #ffff;
    }
`
const Deletetext = styled.p`
margin-left: 10px;
`

export const Modal = ({ productId, onClose, onConfirmDelete }) => {

  const updatedItems = useSelector((state) => state.updatedItems);
  const productsItems = useSelector((state) => state.productsItems);

  const orderCounts = countProductsPerOrder(updatedItems, productsItems);

  const selectedPrishe = updatedItems.find(prishe => prishe.id === productId);
  return (
    <ModalBlock >
      <Modalcontent >
      <CloseModal onClick={onClose}><CloseSVG/></CloseModal>
        <ModalHeader>Вы уверены, что хотите удалить этот приход?</ModalHeader>
        {selectedPrishe && (
          <ProductList key={selectedPrishe.id}>
           <ProduxText> {selectedPrishe.title}</ProduxText>
           <BlockTotal>
           <TotalProduc>{orderCounts[selectedPrishe.id]}</TotalProduc> 
           <ProducText>Продукты</ProducText> 
           </BlockTotal>
           <DateBlock>
           <FormDate>{FormatDate(selectedPrishe.date)}</FormDate>
            <p> {selectedPrishe.date}</p>
            </DateBlock>
          </ProductList>
        )}
        <ButtonBlock>
        <CancelButton onClick={onClose}>Отмена</CancelButton>
        <DeleteButton onClick={onConfirmDelete}><Trash/><Deletetext>Удалить</Deletetext></DeleteButton>
        </ButtonBlock>
      </Modalcontent>
    </ModalBlock>
  );
};

