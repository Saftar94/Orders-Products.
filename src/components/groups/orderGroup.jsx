// import { products } from "../shared/app";
import styled from "styled-components";
import { Plus } from "../svg&image/svg/svgExport";
import { ArrHeadSvg } from "../main/mainheader";
import { Trash } from "../svg&image/svg/svgExport";
import { useState } from "react";
import { CloseSVG } from "../svg&image/svg/svgExport";
import {useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from "../../redux/actions";


const GroupBlockRigth = styled.div`
width: 100%;
position: relative;
display: flex;
border-radius: 9px;
box-shadow: 4px 2px 5px -5px rgba(0,0,0,0.31);
border: 1px solid rgba(2,9,13,0.31);
padding: 15px;

`
const HeaderOrder = styled.p`
color: #000000;
font-size: 18px;
font-weight: 700;
padding: 15px 0px;

`

const SVGOrder = styled(ArrHeadSvg)`
margin-right: 10px;
display: flex;
align-items: center;
width: 15px;
height: 15px;
`
const HeaderBlock = styled.div`
color:#2acc2a;
display: flex;
flex-direction: column;
margin-bottom: 10px;

`
const AddProducts = styled.div`
display: flex;
align-items: center;

`
const ImgMonitor = styled.img`
width: 40px;
height:40px;
`
const OrderList = styled.li`
position: relative;
margin-bottom: 20px;
border-radius: 9px;
box-shadow: 4px 2px 5px -5px rgba(0,0,0,0.31);
border: 1px solid rgba(2,9,13,0.31);
align-items: center;
display: flex;
justify-content: space-between;
flex-direction: initial;
transition: transform 0.2s ease;
display: flex;
width: 100%;
padding: 15px 15px;


&::before {
  content: '•';
  color: ${(props) => (props.isnew ? '#2acc2a' : '#808080')};
  font-size: 2.5em;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 0.2rem;
  margin-right: 0.2rem;
}

&:hover {
  transform: translateY(-5px);
  
}


`
const BlockName = styled.div`
`
const OrderName = styled.p`
color: #000000;
font-size: 12px;
`
const OrderSeria = styled.p`
color: #696767;
font-size: 12px;
`
const Status = styled.p`
`
const ButtonTrash = styled.button`
color: #696767;
`

const CloseIcon = styled.p`
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


export const OrderGroup = ({order, onCloseRightBlock})=>{
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseClick = () => {
    setIsOpen(false);
    onCloseRightBlock();
  };

  const productsItems = useSelector((state) => state.productsItems);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(deleteProduct(id));
  };

    return (
      <>
      {isOpen && (
        <GroupBlockRigth>
             <CloseIcon onClick={handleCloseClick}><CloseSVG/></CloseIcon>
        {order && (
            <div style={{width:"100%"}}>
                <HeaderBlock>
              <HeaderOrder>{order.title}</HeaderOrder>
            <AddProducts>
                <SVGOrder> <Plus/></SVGOrder>
                 Добавить Продукты
                </AddProducts>
                </HeaderBlock>
              <ul>
                {productsItems.map(product =>(
                  product.order === order.id && (
                    <OrderList key={product.id} isnew={product.isNew}>
                    <ImgMonitor  srcSet={product.photo}
                      src={product.photo}
                      alt="My Image" />
                      <BlockName>
                      <OrderName>
                      {product.title}
                      </OrderName>
                      <OrderSeria>
                      {product.serialNumber}
                      </OrderSeria>
                      </BlockName>
                      <Status>
                      {product.isNew ? (
                <span style={{ color: "green" }}>Свободен</span>
              ) : (
                <span style={{ color: "gray" }}>В ремонте</span>
              )}
              </Status>
                          <ButtonTrash onClick={() => handleRemoveTodo(product.id)}><Trash/></ButtonTrash>

                      </OrderList>
                  )
                ))}
              </ul>
            </div>
            
          )}
          </GroupBlockRigth>
      )} 
      </>
    )
}


