import styled from "styled-components"
import { MenuPrishes, ArrowRight } from "../svg&image/svg/svgExport"
import { FormatDate } from "../main/formatDate"
import { useState } from "react"
import { OrderGroup } from "./orderGroup"
import { orders } from "../shared/app"
import {useSelector } from 'react-redux';

const ProductTitle = styled.ul`
display: flex;
flex-direction: column;
`

const ProductList = styled.li`
position: relative;
display: flex;
justify-content: space-between;
margin-bottom: 20px;
border-radius: 9px;
box-shadow: 4px 2px 5px -5px rgba(0,0,0,0.31);
border: 1px solid rgba(2,9,13,0.31);
align-items: center;


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
const ProBlockLeft = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
padding: 15px 15px;

`
const ProducMenu = styled.div`
    display: flex;
    align-items: center;
    `

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

const DateBlock = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`

const FormDate = styled.p`
color: #696767;
font-size: 12px;
margin-bottom: 3px;
`

const ShortDate = styled.p`
color: black;
`
const ArrowStyle = styled.p`

display: flex;
justify-content: center;
align-items: center;
transition: margin-right 0.3s;
width: 40px;
position: absolute;
left: 100%;
margin-left: -40px;
background-color: #b6b6b6;
height: 100%;
border-top-right-radius: 8px;
border-bottom-right-radius: 8px;


`


const ArrowRightSvg = styled(ArrowRight)`
`

const GroupBlock = styled.div`
  display: flex;
    flex-direction: row;
    justify-content: space-between;
    `

    const GroupBlockLeft = styled.div`
    width: 50%;
    margin-right: 15px;
    `


 export const countProductsPerOrder = () => {
  
  const productsCount = {};

  orders.forEach(order => {
    const productsItems = useSelector((state) => state.productsItems);
    const count = productsItems.filter(product => product.order === order.id).length;
    productsCount[order.id] = count;
  });
  return productsCount;

};



export const GroupProducts = ()=>{
  const updatedItems = useSelector((state) => state.updatedItems);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const handleOrderClick = (order) => {
      setSelectedOrder(order);
      setActiveItem(order)

    };

    const handleCloseRightBlock = () => {
      setSelectedOrder(null); 
      setActiveItem(null)
    };
    

    return(
      <GroupBlock >
        <GroupBlockLeft >
        <ProductTitle>
     { updatedItems.map(prishes =>(     
         <ProductList key={prishes.id} 
          onClick={() => handleOrderClick(prishes)}
          >
       <ProBlockLeft
        style={{ marginRight: activeItem === prishes ? '40px' : '0'  }} 
                > 
            <ProducMenu> <SvgMenu><MenuPrishes/></SvgMenu>
            <BlockTotal>
              <TotalProduc>{countProductsPerOrder()[prishes.id]}</TotalProduc> 
              <ProducText>Продукты </ProducText> 
              </BlockTotal>
                </ProducMenu>
                <DateBlock>
                <FormDate>{FormatDate(prishes.date)}</FormDate>
                <ShortDate>{prishes.date}</ShortDate>
                </DateBlock>
                </ProBlockLeft>
                <ArrowStyle
                style={{ opacity: activeItem === prishes ? '1' : '0' }}
                > 
                <ArrowRightSvg   />
                </ArrowStyle>
                
          </ProductList>
        ))}
        
        </ProductTitle>        
        </GroupBlockLeft>
        
        {selectedOrder &&  
        <OrderGroup order={selectedOrder}
          onCloseRightBlock={handleCloseRightBlock}
          />}

        </GroupBlock>
        
    )

}