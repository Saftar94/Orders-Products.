import styled from "styled-components";

export const SvgMenu = styled.span`
  &.svg-menu {
    display: flex;
    padding: 6px;
    border: 1px solid #c3c2c2;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
`;

export const BlockTotal = styled.div`
  &.block-total {
    display: flex;
    flex-direction: column;
  }
`;

export const TotalProduc = styled.span`
  &.total-produce {
    color: #696767;
    font-size: 18px;
  }
`;

export const ProducextTotal = styled.span`
  &.producetotal-text {
    color: #696767;
    font-size: 10px;
  }
`;

export const ProducMenu = styled.div`
  &.produce-menu {
    display: flex;
    align-items: center;
  }
`;

export const ProBlockRight = styled.div`
  &.pro-block-right {
    width: 100%;
  }
`;

export const ProBlockLeft = styled.div`
  &.pro-block-left {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const ProductTitle = styled.ul`
  &.product-title {
    display: flex;
    flex-direction: column;
  }
`;

export const ProductList = styled.li`
  &.product-list {
    dposition: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 15px 15px;
    border-radius: 9px;
    box-shadow: 4px 2px 5px -5px rgba(0,0,0,0.31);
    border: 1px solid rgba(2,9,13,0.31);
    align-items: center;
    
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
`;

export const ProduxText = styled.p`
  &.produx-text {
    position: relative;
    display: inline-block;
    color: #696767;
    font-size: 18px;
    text-align: justify;
    white-space: pre-line;
    text-decoration: underline;
    text-underline-position: under;
    text-decoration-color: #c5c5c5;
    color: #696767;
  }
`;

export const FormDate = styled.p`
  &.form-date {
    color: #696767;
    font-size: 12px;
    margin-bottom: 3px;
  }
`;

export const UsdPrice = styled.p`
  &.usd-price {
    color: #696767;
    font-size: 12px;
    margin-bottom: 3px;
  }
`;

export const ShortDate = styled.p`
  &.short-date {
    color: black;
  }
`;

export const DateBlock = styled.div`
  &.date-block {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;
