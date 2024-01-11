



export default (state, action) => 
{
  switch (action.type) {
    case "[TRANSACTIONS] ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
      case "[TRANSACTIONS] DELETE__TRANSACTION":
        return{
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        };

    default:
      return state;
  }
};
