
export const EmployeeReducer = (state, action) => {

    switch(action.type) {
        case 'addEmployee': {
            console.log('Add Employee Dispatch selected');
            console.log(action.payload)
            state = [
                ...state,
                action.payload
            ]
            return state;
        }
        case 'deleteEmployee': {
            console.log('Delete Employee Dispatch Selected')
            return state;
        }
        default: {
            return state;
        }
    }
}