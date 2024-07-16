const initialState = {
    title: '',
    description: '',
  };

const disasterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DISASTER_DETAIL':
        return {
            ...state,
            id: action.payload.id,
            title: action.payload.title,
            description: action.payload.description,
        };
        default:
        return state;
    }
};

export default disasterReducer;
