// actions.js

// Action Types
export const SET_DISASTER_DETAIL = 'SET_DISASTER_DETAIL';

// Action Creators
export const setDisasterDetail = (detail) => ({
    type: SET_DISASTER_DETAIL,
    payload: detail,
});
