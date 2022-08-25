const INIT_STATE = {
  carts: [],
  products: [],
};

export const dataReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        products: action.payload,
      };

    case "ADD_CART":
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
        return {
          ...state,
          carts: [...state.carts],
        };
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "RMV_CART":
      const data = state.carts.filter((el) => el.id !== action.payload);
      // console.log(data);

      return {
        ...state,
        carts: data,
      };

    case "RMV_ONE":
      const itemIndex_dec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.carts[itemIndex_dec].qnty >= 1) {
        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[itemIndex_dec].qnty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload);

        return {
          ...state,
          carts: data,
        };
      }

    default:
      return state;
  }
};
