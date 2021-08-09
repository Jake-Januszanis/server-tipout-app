

export const TipsReducer = (state, action) => {

    switch (action.type) {
        case 'addTips': {
           console.log(action.payload)
           state = [
               {title: 'Card Tips', value: action.payload.cardTips, key: 1},
               {title: 'Cash Made', value: action.payload.cashInHand, key: 2},
               {title: 'Cash Owed', value: action.payload.cashOwed, key: 3},
               {title: 'Hours', value: action.payload.hours, key: 4}
           ]
            return state;
           }
        case 'updateSales': {
        console.log('Sales dispatch')
          return state;
        };
        case 'delete': {
           console.log('Delete Dispatch')
           return state
        };
        default: {
            return state;
        }
    }
}