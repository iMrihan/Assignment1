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

    case "ADD_TO_CART":
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.carts[itemIndex].quantity += 1;
        return {
          ...state,
          carts: [...state.carts],
        };
      } else {
        const temp = { ...action.payload, quantity: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "REMOVE_CART":
      const data = state.carts.filter((el) => el.id !== action.payload);
      // console.log(data);

      return {
        ...state,
        carts: data,
      };

    case "REMOVE_ONE":
      const itemIndex_dec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.carts[itemIndex_dec].quantity >= 1) {
        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[itemIndex_dec].quantity === 1) {
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
