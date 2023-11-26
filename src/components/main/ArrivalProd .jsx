import {  useEffect } from "react";
import Container from "../constainer/constainer"
import { MainHeader } from "../main/mainheader";
import {  MenuPrishes } from "../svg&image/svg/svgExport";
import { FormatDate } from "../main/formatDate";
import {countProductsPerOrder } from "../groups/groupProducts";
import {useSelector, useDispatch } from 'react-redux';
import { removeTask, calculateOrderSum,closeModal,confirmDelete } from "../../redux/actions";
import { Modal } from "../modalRemove/modalRemove";
import { TrashButtonOrder } from "../Button/buttomTrashOrder";
import { SvgMenu,
     BlockTotal,
     TotalProduc,
     ProducextTotal,
     ProducMenu,
     ProBlockRight,
     ProBlockLeft,
     ProductTitle,
     ProductList,
     ProduxText,
     FormDate,
     UsdPrice,
     ShortDate,
     DateBlock } from "../../style/styles";






export const ArrivalProd = () => {
  const updatedItems = useSelector((state) => state.updatedItems);
  const productsItems = useSelector((state) => state.productsItems);
  const orderSums = useSelector((state) => state.orderSums);
  const modal = useSelector((state) => state.modal);

  const orderCounts = countProductsPerOrder(updatedItems, productsItems);
  const dispatch = useDispatch();


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
              <ProductTitle className="product-title">
           { updatedItems.map(prishe => (
            <ProductList className="product-list"  key={prishe.id}>
              <ProBlockRight className="pro-block-right">
             <ProduxText className="produx-text"> {prishe.title}</ProduxText>
             </ProBlockRight>
             <ProBlockLeft className="pro-block-left">
              <ProducMenu className="produce-menu"> <SvgMenu className="svg-menu"><MenuPrishes/></SvgMenu>
              <BlockTotal className="block-total">
                <TotalProduc className="total-produce">{orderCounts[prishe.id]}</TotalProduc> 
                <ProducextTotal className="total-produce">Продукты</ProducextTotal> 
                </BlockTotal>
                  </ProducMenu>
                  <DateBlock className="date-block">
                  <FormDate className="form-date">{FormatDate(prishe.date)}</FormDate>
                  <ShortDate className="short-date">{prishe.date}</ShortDate>
                  </DateBlock>
              {orderSums[prishe.id] && (
  <ul>
    <li>
      <UsdPrice  className="usd-price">{orderSums[prishe.id].USD} {prishe.price.find(price => price.symbol === '$').symbol} </UsdPrice>
      <p>{orderSums[prishe.id].UAH} {prishe.price.find(price => price.symbol === 'UAH').symbol}</p>
    </li>
  </ul>
)}
            <TrashButtonOrder itemId={prishe.id} />
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

