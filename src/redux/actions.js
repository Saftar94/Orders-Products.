import * as actions from "./actionTypes";

export const removeTask = (id) => ({
  type: actions.DELETE_ORDER,
  payload: { id },
});

export const deleteProduct = (id) => ({
  type: actions.DELETE_PRODUCT,
  payload: { id },
});

export const calculateOrderSum = (order) => {
  return {
    type: actions.CALCULATE_ORDER_SUM,
    payload: order,
  };
};

export const openModal = (productId) => ({
  type: actions.OPEN_MODAL,
  payload: productId,
});

export const closeModal = () => ({
  type: actions.CLOSE_MODAL,
});

export const confirmDelete = (productId) => ({
  type: actions.CONFIRM_DELETE,
  payload: productId,
});
