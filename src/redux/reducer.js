import * as actions from "./actionTypes";
import { orders, products } from "../components/shared/app";
const initialState = {
  updatedItems: orders,
  productsItems: products,
  orderSums: {},
  modal: {
    isOpen: false,
    productId: null,
  },
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.DELETE_ORDER:
      const updatedObject = state.updatedItems.filter(
        (todo) => todo.id !== action.payload.id,
      );
      return {
        ...state,
        updatedItems: updatedObject,
      };

    case actions.DELETE_PRODUCT:
      const updatedProductsObje = state.productsItems.filter(
        (product) => product.id !== action.payload.id,
      );
      return {
        ...state,
        productsItems: updatedProductsObje,
      };

    case actions.CALCULATE_ORDER_SUM:
      const order = action.payload;
      const productsCount = state.productsItems.filter(
        (product) => product.order === order.id,
      ).length;

      const usdPrice = order.price.find((price) => price.symbol === "$");
      const uahPrice = order.price.find((price) => price.symbol === "UAH");
      return {
        ...state,
        orderSums: {
          ...state.orderSums,
          [order.id]: {
            USD: productsCount * usdPrice.value,
            UAH: productsCount * uahPrice.value,
          },
        },
      };

    case "OPEN_MODAL":
      return {
        ...state,
        modal: {
          isOpen: true,
          productId: action.payload,
        },
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        modal: {
          isOpen: false,
          productId: null,
        },
      };

    case "CONFIRM_DELETE":
      return {
        ...state,
        modal: {
          isOpen: false,
          productId: null,
        },
      };

    case "SET_PRODUCTS_ITEMS":
      return {
        ...state,
        updatedItems: action.payload.map((product) => ({
          ...product,
          orderInfo: state.productsItems.find(
            (order) => order.id === product.order,
          ),
        })),
      };

    default:
      return state;
  }
};

export default todoReducer;
