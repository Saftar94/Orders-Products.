import {  useEffect } from "react";
import styled from "styled-components";
import Container from "../constainer/constainer"
import { MainHeader } from "../main/mainheader";
import {useSelector, useDispatch } from 'react-redux';
import {  calculateOrderSum} from "../../redux/actions";
import { FormatDate } from "../main/formatDate";
import { useState } from "react";
import { TrashButtonProduct } from "../Button/buttonTrashProduc";

const OrderItems = styled.ul`
list-style: none;
padding: 0;
display: flex;
flex-wrap: wrap;
`

const OrderList = styled.li`
font-size: 9px;
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
  color: #2acc2a;;
  font-size: 2.5em;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  color: ${(props) => (props.$isnew ? '#2acc2a' : '#808080')};
}

&:hover {
  transform: translateY(-5px);
  
}
`
const OrderListPrice = styled.li`

`
const ImgMonitor = styled.img`
width: 40px;
height:40px;
`

const BlockName = styled.div`
`

const OrderName = styled.p`
color: #000000;
`

const OrderSeria = styled.p`
color: #696767;
font-size: 9px;
`
const Status = styled.p`

`


const StyledDollar = styled.span`
color: #696767;
margin-bottom: 3px;
`;

const StyledUAH = styled.span`
`;
const StyledDivDate = styled.div`

`;
const StyledType = styled.p`
`;

const FormDate = styled.p`
color: #696767;
margin-bottom: 3px;
`

const ShortDate = styled.p`
color: black;
`

const DateBlock = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`
const HeaderProduc = styled.div`
display: flex;
align-items: center;
}
`
const SelectProd = styled.select`
width: 100%;
margin-left: 5px;
padding: 1px 3px;
}
`
const SelectProdBlock = styled.div`
align-items: center;
display: flex;
margin-left: 20px;

`


export const Products = () => {
  const updatedItems = useSelector((state) => state.updatedItems);
  const productsItems = useSelector((state) => state.productsItems);
  const [filterType, setFilterType] = useState('');


  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  const filteredProducts = filterType
    ? productsItems.filter((product) => product.type === filterType)
    : productsItems;

  const dispatch = useDispatch();

  useEffect(() => {
    updatedItems.forEach((order) => {
      dispatch(calculateOrderSum(order));
    });
  }, [updatedItems, dispatch]);

  const getOrderTitle = (orderId) => {
    const order = updatedItems.find((order) => order.id === orderId);
    return order ? order.title : 'Заказ не найден';
  };
  
  return (
    <Container>
      <HeaderProduc>
<MainHeader newTitle="Продукты" />
<SelectProdBlock>
<p>Тип:</p>
<SelectProd value={filterType} onChange={handleFilterChange}>
          <option value="">Все типы</option>
          <option value="Monitors">Мониторы</option>
          <option value="Processes">Процессоры</option>
        </SelectProd>
        </SelectProdBlock>
        </HeaderProduc>
      <OrderItems>
                {filteredProducts.map(product =>(
 
                      <OrderList key={product.id} $isnew={product.isNew}>
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
                   <StyledDivDate>
                      <p>с {product.guarantee.start}</p>
                      <p>по {product.guarantee.end}</p>
                  </StyledDivDate>
                  <Status>
                      {product.isNew ? (
                <span style={{ color: "green" }}>Новый</span>
              ) : (
                <span style={{ color: "gray" }}>Б/У</span>
              )}
              </Status>
    <ul>
  {product.price.map(product => (
              <OrderListPrice key={product.symbol}>
          {product.symbol === 'UAH' ? (
        <StyledUAH>
          {product.value} {product.symbol}
        </StyledUAH>
      ) : product.symbol === '$' ? (
        <StyledDollar>
          {product.value} {product.symbol}
        </StyledDollar>
      ) : null}
              </OrderListPrice>
          ))}
              </ul>
              <p>{getOrderTitle(product.order)}</p>

              <StyledType>{product.type}</StyledType>
              <DateBlock>
              <FormDate>{FormatDate(product.date)}</FormDate>
              <ShortDate>{product.date}</ShortDate>
              </DateBlock>
                          <TrashButtonProduct itemId={product.id} />

                      </OrderList>
                  )
                )}
                
              </OrderItems>
    
    </Container>
  );
  }



