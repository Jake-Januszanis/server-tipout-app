

export const SalesReducer = (state, action) => {

    switch (action.type) {
        case 'addSales': {
           console.log(action.payload)
           state = [
               {title: 'Total Sales', value: action.payload.totalSales, key: 1},
               {title: 'Food Sales', value: action.payload.foodSales, key: 2},
               {title: 'Liquor Sales', value: action.payload.liquorSales, key: 3},
               {title: 'Beer Sales', value: action.payload.beerSales, key: 4},
               {title: 'Wine Sales', value: action.payload.wineSales, key: 5},
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