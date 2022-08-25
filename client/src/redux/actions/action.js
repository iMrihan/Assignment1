export const getData = (payload) => {
  return {
    type: "GET_DATA",
    payload,
  };
};

export const ADD = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

// remove items
export const DELETE = (id) => {
  return {
    type: "REMOVE_CART",
    payload: id,
  };
};

// remove individual item

export const REMOVE = (item) => {
  return {
    type: "REMOVE_ONE",
    payload: item,
  };
};
