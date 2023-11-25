import {  useEffect } from "react";
import styled from "styled-components";
import { Trash } from "../svg&image/svg/svgExport";
import Container from "../constainer/constainer"
import { MainHeader } from "../main/mainheader";
import {  MenuPrishes } from "../svg&image/svg/svgExport";
import { FormatDate } from "../main/formatDate";
import {countProductsPerOrder } from "../groups/groupProducts";
import {useSelector, useDispatch } from 'react-redux';
import { removeTask, calculateOrderSum,openModal,closeModal,confirmDelete } from "../../redux/actions";
import { Modal } from "../modalRemove/modalRemove";

const SvgMenu = styled.span`
display: flex;
padding: 6px;
border: 1px solid #c3c2c2;
border-radius: 50%;
justify-content: center;
align-items: center;
margin-right: 10px;
`


const BlockTotal= styled.div`
display: flex;
flex-direction:column;
`
const TotalProduc = styled.span`
color: #696767;
font-size: 18px;
`
const ProducText = styled.span`
color: #696767;
font-size: 10px;
`

const ProducMenu = styled.div`
    display: flex;
    align-items: center;
    `
const ProBlockRgihht = styled.div`
width: 100%;
`
const ProBlockLeft = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`
const ProductTitle = styled.ul`
display: flex;
flex-direction: column;
`
const ProductList = styled.li`
display: flex;
justify-content: space-between;
margin-bottom: 20px;
padding: 15px 15px;
border-radius: 9px;
box-shadow: 4px 2px 5px -5px rgba(0,0,0,0.31);
border: 1px solid rgba(2,9,13,0.31);

list-style-type: none;
&:last-child {
  margin-bottom: 0;
}
display: flex;
flex-direction: initial;
justify-content: space-between;
transition: transform 0.2s ease;

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
const FormDate = styled.p`
color: #696767;
font-size: 12px;
margin-bottom: 3px;
`
const UsdPrice = styled.p`
color: #696767;
font-size: 12px;
margin-bottom: 3px;
`
const ShortDate = styled.p`
color: black;
`

const ButtonTrash = styled.button`
color: #696767;
`
const DateBlock = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`




export const ArrivalProd = () => {
  const updatedItems = useSelector((state) => state.updatedItems);
  const productsItems = useSelector((state) => state.productsItems);
  const orderSums = useSelector((state) => state.orderSums);
  const modal = useSelector((state) => state.modal);

  const orderCounts = countProductsPerOrder(updatedItems, productsItems);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(openModal(id));
  }

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleConfirmDelete = () => {
    dispatch(removeTask(modal.productId));
    dispatch(confirmDelete(modal.productId));
  };

  useEffect(() => {
    updatedItems.forEach((order) => {
      dispatch(calculateOrderSum(order));
    });
  }, [updatedItems, dispatch]);

  
  
      return(
          <Container>
            <MainHeader newTitle="Приходы"/>
              <ProductTitle>
           { updatedItems.map(prishe => (
            <ProductList key={prishe.id}>
              <ProBlockRgihht>
             <ProduxText> {prishe.title}</ProduxText>
             </ProBlockRgihht>
             <ProBlockLeft>
              <ProducMenu> <SvgMenu><MenuPrishes/></SvgMenu>
              <BlockTotal>
                <TotalProduc>{orderCounts[prishe.id]}</TotalProduc> 
                <ProducText>Продукты</ProducText> 
                </BlockTotal>
                  </ProducMenu>
                  <DateBlock>
                  <FormDate>{FormatDate(prishe.date)}</FormDate>
                  <ShortDate>{prishe.date}</ShortDate>
                  </DateBlock>
              {orderSums[prishe.id] && (
  <ul>
    <li>
      <UsdPrice>{orderSums[prishe.id].USD} {prishe.price.find(price => price.symbol === '$').symbol} </UsdPrice>
      <p>{orderSums[prishe.id].UAH} {prishe.price.find(price => price.symbol === 'UAH').symbol}</p>
    </li>
  </ul>
)}
            <ButtonTrash onClick={() => handleRemoveTodo(prishe.id)}><Trash/></ButtonTrash>
            </ProBlockLeft>
            </ProductList>
          ))}
{modal.isOpen && (
        <Modal
          productId={modal.productId}
          onClose={handleCloseModal}
          onConfirmDelete={handleConfirmDelete}
        />
      )}
        </ProductTitle>
          </Container>
      )
  }

