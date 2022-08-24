export const getData = (payload) => {
  return {
    type: "GET_DATA",
    payload,
  };
};

export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

// remove items
export const DLT = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};

// remove individual item

export const REMOVE = (item) => {
  return {
    type: "RMV_ONE",
    payload: item,
  };
};