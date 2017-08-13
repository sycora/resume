const initialResumeState = {
    isFetching: false,
    didInvalidate: false,
    list: []
};

export const resume = (state = initialResumeState, action) => {
    switch (action.type) {
        case 'INVALIDATE_PROFILE':
            return {
                ...state,
                didInvalidate: true
            };
        case 'REQUEST_RESUME':
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            };
        case 'RECEIVE_RESUME':
            return {
                ...state,
                didInvalidate: false,
                isFetching: false,
                lastUpdated: action.receivedAt,
                list: action.list
            };
        case 'RESUME_ADD_ITEM':
            return {
                ...state,
                list: [...state.list, action.newItem]     
            };
        case 'RESUME_EDIT_ITEM':
            return {
                ...state,
                list: state.list.map(item => {
                    return item.id !== action.editedItem.id ? item : action.editedItem;
                })   
            };
        case 'RESUME_DELETE_ITEM':
            return {
                ...state,
                list: state.list.filter(item => {
                    return item.id !== action.editedItem.id;
                })   
            };
        case 'LOGOUT':
            return {
                ...state,
                list: null
            }
        default:
            return state;
    }
}
