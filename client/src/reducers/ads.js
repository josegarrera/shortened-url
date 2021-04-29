import { types } from '../types';

const initialState = {
    visible: false,
    info: null,
};

export const adsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ADD:
            return {
                visible: action.payload.visible,
                info: action.payload.info || null,
            };
        default:
            return state;
    }
};